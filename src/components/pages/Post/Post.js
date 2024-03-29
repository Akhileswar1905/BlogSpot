import { useNavigate } from "react-router-dom";
import "./Post.css";
// import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useState } from "react";

const Post = (props) => {
  const post = props.post;
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(post._id);
    navigate(`/${post._id}`);
  };

  const [saved, setSaved] = useState([]);
  const handleBookMark = (e) => {
    console.log("id: ", e.target.id);
    if (e.target.className === "fa-regular fa-bookmark") {
      saved.push(e.target.id);
      setSaved(saved);
      console.log(saved);
      e.target.className = "fa-solid fa-bookmark";
    } else {
      e.target.className = "fa-regular fa-bookmark";
    }
  };

  return (
    <div className="post">
      <div className="postImg">
        <img
          src={
            post.blogImg
              ? post.blogImg
              : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          loading="lazy"
          alt="blog"
          onClick={handleClick}
        />
      </div>

      <div className="postInfo">
        <div className="bookmark">
          <i
            className="fa-regular fa-bookmark"
            onClick={handleBookMark}
            style={{ cursor: "pointer" }}
            id={post._id}
          ></i>
        </div>

        <div className="postCategories">
          {post.blogTags.map((cat, index) => (
            <span
              onClick={() => {
                navigate(`/?cat=${cat}`);
              }}
              className="postCat"
              key={index}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="postTitle" onClick={handleClick}>
          <span className="Posttitle">{post.blogTitle}</span>
        </div>
        <hr />
        <div className="postTime">
          <span className="time">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <p className="postDescription">{post.blogContent}</p>
      </div>
    </div>
  );
};

export default Post;
