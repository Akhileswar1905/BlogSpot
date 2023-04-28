import { useNavigate } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const post = props.post;
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(post._id);
    navigate(`/${post._id}`);
  };

  return (
    <div className="post">
      <div className="postImg">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="blog"
          onClick={handleClick}
        />
      </div>
      <div className="postInfo">
        <div className="postCategories">
          {post.blogTags.map((cat, index) => (
            <span className="postCat" key={index}>
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
