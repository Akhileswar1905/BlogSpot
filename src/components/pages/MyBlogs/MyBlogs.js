import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const MyBlogs = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.post(
        `https://blogspot-kn7q.onrender.com/blogs/my-blogs`,
        {
          userId: token,
        }
      );
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [token]);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default MyBlogs;
