import axios from "axios";
import "./NewBlog.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/FireBase";

const NewBlog = () => {
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "blogTags") {
      const tags = e.target.value.split(",");
      console.log("tags:", tags);
      setPost({
        ...post,
        [e.target.name]: tags,
      });
    } else if (e.target.name === "file") {
      setPost({
        ...post,
        [e.target.name]: e.target.files[0],
      });
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    } else {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    }
    console.log(post);
  };

  const img = document.querySelector(".img");
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
            setPost((prev) => ({ ...prev, blogImg: downloadURL }));
            img.src = downloadURL;
          });
        }
      );
    };
    file && uploadFile();
  }, [file, img]);

  // use navigate
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    await axios.post("http://localhost:3001/", post);
    // console.log(res.data);
    navigate("/");
  };

  return (
    <div className="newblog">
      <img
        src="https://images.unsplash.com/photo-1679199685253-5041e82a4600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="img"
        className="newblogImg img"
      />
      <form className="newblogForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="file">
            <FaPlus className="plus-icon" />
          </label>
          <input
            onChange={handleChange}
            name="file"
            type="file"
            id="file"
            style={{ display: "none" }}
          />
          <input
            onChange={handleChange}
            name="blogTitle"
            type="text"
            className="newblogInput"
            placeholder="Title..."
          />
        </div>
        <div className="formGroup">
          <textarea
            placeholder="Enter the content..."
            onChange={handleChange}
            name="blogContent"
            className="newblogInput newblogWrite"
          ></textarea>
        </div>
        <div className="tagGroup">
          <span>Tags</span>
          <input
            onChange={handleChange}
            type="text"
            name="blogTags"
            className="newblogInput tags"
            placeholder="Enter the tags... separated by comma"
          />
        </div>
        <button onClick={handleSubmit} className="publish-btn">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
