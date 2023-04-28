import axios from "axios";
import "./NewBlog.css";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewBlog = () => {
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    // console.log(post);
    if (e.target.name === "blogTags") {
      const tags = e.target.value.split(",");
      console.log("tags:", tags);
      setPost({
        ...post,
        [e.target.name]: tags,
      });
    } else {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    }
  };

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
        className="newblogImg"
      />
      <form className="newblogForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="newblogImage">
            <FaPlus className="plus-icon" />
          </label>
          <input
            onChange={handleChange}
            name="file"
            type="file"
            id="newblogImage"
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
