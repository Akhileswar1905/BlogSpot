import { Link } from "react-router-dom";
import "./Article.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
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
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://blogspot-kn7q.onrender.com/users/${token}`
      );
      console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, []);

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
          {user.categories
            ? user.categories.map((cat, index) => (
                <Link to={`/?cat=${cat}`} key={index} className="listItem">
                  {cat}
                </Link>
              ))
            : categories.map((cat, index) => (
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
