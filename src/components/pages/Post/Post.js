import { useNavigate } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const post = props.post;
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/:${post.id}`);
  };

  return (
    <div className="post">
      {console.log(post.author)}
      <div className="postImg">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="blog"
          onClick={handleClick}
        />
      </div>
      <div className="postInfo">
        <div className="postCategories">
          {post.cats.map((cat, index) => (
            <span className="postCat" key={index}>
              {cat}
            </span>
          ))}
        </div>
        <div className="postTitle" onClick={handleClick}>
          <span className="Posttitle">{post.title}</span>
        </div>
        <hr />
        <div className="postTime">
          <span className="time">{post.time}</span>
        </div>

        <p className="postDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          impedit eius harum ipsam unde aliquid aliquam inventore ullam rem
          modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          impedit eius harum ipsam unde aliquid aliquam inventore ullam rem
          modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          impedit eius harum ipsam unde aliquid aliquam inventore ullam rem
          modi.
        </p>
      </div>
    </div>
  );
};

export default Post;
