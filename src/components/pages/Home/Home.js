import { useState } from "react";
import Header from "../../Header/Header";
import Article from "../Article/Article";
import Posts from "../Posts/Posts";
import "./Home.css";

const Home = () => {
  let [c, setC] = useState(0);
  document.addEventListener("onload", () => {
    setC(c++);
  });

  return (
    <>
      <Header />
      {console.log(c)}
      <div className="home">
        <Posts />
        <Article />
      </div>
    </>
  );
};

export default Home;
