import { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";
import axios from "axios";
const Posts = () => {
  // Fetching Posts using axios

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://127.0.0.1:3001/");
      // console.log(res.data);
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
