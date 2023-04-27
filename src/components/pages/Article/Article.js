import "./Article.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";

const Article = () => {
  return (
    <div className="article">
      <div className="articleItem">
        <span className="title">ABOUT ME </span>{" "}
        <img
          src="https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
          alt="pp"
          className="profilePic"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          voluptatem ipsa quas qui hic commodi vitae incidunt nemo ducimus quos,
          veniam ea neque esse officiis.
        </p>
      </div>
      <div className="articleItem">
        <span className="title">CATEGORIES</span>
        <ul className="categoryList">
          <li className="listItem">Life</li>
          <li className="listItem">Anime and Manga</li>
          <li className="listItem">Music</li>
          <li className="listItem">Health</li>
          <li className="listItem">Technology</li>
          <li className="listItem">Movies</li>
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
