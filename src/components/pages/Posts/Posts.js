import { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Posts = () => {
  // Fetching Posts using axios

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(search);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://blogspot-api-why2.onrender.com/blogs${search}`
      );
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
