import "./Settings.css";
import { FaUserAlt } from "react-icons/fa";
import Article from "../Article/Article";
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/FireBase";
import axios from "axios";

const Settings = () => {
  const [form, setForm] = useState({});
  const [cat, setCat] = useState([]);
  const [file, setFile] = useState(null);
  const img = document.querySelector(".img");
  const handleForm = (e) => {
    console.log(form);
    if (e.target.name === "file") {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
      setFile(e.target.files[0]);
    } else if (e.target.name === "cats") {
      setCat([...cat, e.target.value]);
      cat.push(e.target.value);
      setForm({
        ...form,
        [e.target.name]: cat,
      });
      console.log("cat", cat);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const id = localStorage.getItem("token");

  // useEffect
  useEffect(() => {
    const uploadFile = () => {
      const filename = new Date().getTime() + file.name; //setting filename
      console.log(filename);
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setForm((prev) => ({ ...prev, profilePicture: downloadURL }));
            img.src = downloadURL;
          });
        }
      );
    };
    file && uploadFile();
  }, [file, img]);

  // Fetching user

  const fetchUser = async () => {
    const user = await axios.put(`http://127.0.0.1:3001/user/${id}`, form);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(form));
  };

  fetchUser();

  const cats = [
    "Movies",
    "Sports",
    "Anime",
    "Health",
    "Life",
    "Technology",
    "Sciences",
    "Social",
    "Cultural",
    "Politics",
    "Music",
    "Magic",
    "Business",
    "Education",
    "Entertainment",
    "Comedy",
  ].sort();

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <h1>Update Your account</h1>
          <span className="settingsDel">Delete Account</span>
        </div>
        <div className="settingsPP">
          <img
            src="https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
            alt=""
            className="img"
          />
          <label className="settingsLabel" htmlFor="file">
            <FaUserAlt className="userIcon" />
          </label>
          <input
            onChange={handleForm}
            className="settingsInput"
            type="file"
            id="file"
            name="file"
            style={{ display: "none" }}
          />
        </div>
        <div className="settingsForm">
          <label className="settingsLabel">UserName</label>
          <input
            onChange={handleForm}
            className="settingsInput"
            type="text"
            name="username"
            placeholder="Enter Your Name"
          />
          <label className="settingsLabel">Email</label>
          <input
            onChange={handleForm}
            className="settingsInput"
            type="email"
            name="email"
            placeholder="Enter Email Id"
          />
          <label className="settingsLabel">Password</label>
          <input
            onChange={handleForm}
            className="settingsInput"
            name="password"
            type="password"
          />
          <div className="settingsForm">
            <label className="settingsLabel">About Me</label>
            <textarea
              className="settingsInput"
              onChange={handleForm}
              type="text"
              name="profileDescription"
            />
          </div>
          <label className="settingsLabel">Categories</label>
          <div className="opt">
            <input
              type="checkbox"
              onChange={handleForm}
              value={"trending"}
              name="cats"
              id="category"
            />
            <label id="category">Trending</label>
          </div>
          {cats.map((cat, index) => (
            <div key={index} className="opt">
              <input
                type="checkbox"
                onChange={handleForm}
                name="cats"
                value={cat}
                id="category"
              />
              <label id="category">{cat}</label>
            </div>
          ))}
          <button className="settingsSubmit" onClick={fetchUser}>
            Update
          </button>
        </div>
      </div>
      <Article props={form} />
    </div>
  );
};

export default Settings;
