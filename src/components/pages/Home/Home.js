import { useState } from "react";
import Header from "../../Header/Header";
import Article from "../Article/Article";
import Posts from "../Posts/Posts";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Article />
      </div>
    </>
  );
};

export default Home;
