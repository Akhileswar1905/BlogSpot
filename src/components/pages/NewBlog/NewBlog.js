import "./NewBlog.css";
import { FaPlus } from "react-icons/fa";
const NewBlog = () => {
  return (
    <div className="newblog">
      <img
        src="https://images.unsplash.com/photo-1679199685253-5041e82a4600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="img"
        className="newblogImg"
      />
      <form className="newblogForm">
        <div className="formGroup">
          <label htmlFor="newblogImage">
            <FaPlus className="plus-icon" />
          </label>
          <input type="file" id="newblogImage" style={{ display: "none" }} />
          <input type="text" className="newblogInput" placeholder="Title..." />
        </div>
        <div className="formGroup">
          <textarea
            placeholder="Enter the content..."
            className="newblogInput newblogWrite"
          ></textarea>
        </div>
        <button className="publish-btn">Publish</button>
      </form>
    </div>
  );
};

export default NewBlog;
