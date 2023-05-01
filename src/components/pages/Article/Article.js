import { Link } from "react-router-dom";
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
  return (
    <div className="article">
      <div className="articleItem">
        <span className="title">ABOUT ME </span>{" "}
        <img
          src={
            "https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
          }
          alt="pp"
          className="profilePic"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolores iusto soluta veritatis quo totam tenetur eaque distinctio,
          odio ea, ullam blanditiis aliquam maiores obcaecati provident quos,
          voluptate fuga! Sunt.
        </p>
      </div>
      <div className="articleItem">
        <span className="title">CATEGORIES</span>
        <ul className="categoryList">
          {categories.map((cat, index) => (
            <Link to={`/?cat=${cat}`} key={index} className="listItem">
              {cat}
            </Link>
          ))}
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
