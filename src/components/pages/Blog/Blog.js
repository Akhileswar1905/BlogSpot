import { useNavigate, useParams } from "react-router-dom";
import Article from "../Article/Article";
import "./Blog.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  const [blog, setBlog] = useState({});
  const fetchBlog = async () => {
    const res = await axios(
      `https://blogspot-api-why2.onrender.com/blogs/${id}`
    );
    setBlog(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`https://blogspot-api-why2.onrender.com/blogs/${id}`);
    navigate("/");
  };

  return (
    <>
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog">
            <div className="blogImg">
              <img
                src={
                  blog.blogImg
                    ? blog.blogImg
                    : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="blogImage"
              />
            </div>
            <h1 className="blogTitle">
              {blog.blogTitle}
              <div
                className="icons"
                style={{ display: token === blog.userId ? "inline" : "none" }}
              >
                <FaEdit className="edit" />
                <FaTrashAlt className="delete" onClick={handleDelete} />
              </div>
            </h1>
            <div className="blogInfo">
              <span className="blogAuthor">
                Author : <b>{blog.username}</b>
              </span>
              <span className="time">
                {new Date(blog.createdAt).toDateString()}
              </span>
            </div>
            <div className="blogDesc">
              <p className="desc">{blog.blogContent}</p>
            </div>
          </div>
        </div>
        <Article />
      </div>
    </>
  );
};

export default Blog;
