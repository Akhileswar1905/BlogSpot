import "./Article.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";

const categories = [
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

const Article = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div className="article">
      <div className="articleItem">
        <span className="title">ABOUT ME </span>{" "}
        <img
          src={
            user.profilePicture
              ? user.profilePicture
              : "https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
          }
          alt="pp"
          className="profilePic"
        />
        <p>{user.profileDescription}</p>
      </div>
      <div className="articleItem">
        <span className="title">CATEGORIES</span>
        <ul className="categoryList">
          {user.cats
            ? user.cats.map((cat) => <li className="listItem">{cat}</li>)
            : categories.map((cat) => <li className="listItem">{cat}</li>)}
        </ul>
      </div>

      <div className="articleItem">
        <span className="title">Follow Me On</span>
        <div className="articleSocial">
          <FaFacebookSquare className="icons" />
          <FaInstagramSquare className="icons" />
          <FaPinterest className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Article;
