import Article from "../Article/Article";
import "./Blog.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog">
            <div className="blogImg">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="blogImage"
              />
            </div>
            <h1 className="blogTitle">
              Blog Title
              <div className="icons">
                <FaEdit className="edit" />
                <FaTrashAlt className="delete" />
              </div>
            </h1>
            <div className="blogInfo">
              <span className="blogAuthor">
                Author : <b>Author</b>
              </span>
              <span className="time">1 hour ago</span>
            </div>
            <div className="blogDesc">
              <p className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, ducimus dolorum delectus praesentium vel quas porro
                at, facilis maiores aperiam nihil cumque harum iusto facere
                recusandae necessitatibus distinctio. Soluta sequi perferendis
                molestiae ratione, quae eius facilis earum quisquam autem
                voluptates veniam alias cupiditate aliquam magnam fuga ex
                assumenda perspiciatis placeat velit nesciunt? Quos cupiditate
                eius ea fuga fugit est consectetur voluptas harum in accusamus
                necessitatibus, nobis, labore molestiae ipsum nemo, omnis dolore
                autem pariatur explicabo soluta quibusdam repellat nulla hic
                cumque! Amet temporibus ipsum quidem blanditiis nam minima sequi
                veritatis quasi provident! Officia quaerat ex incidunt quos
                nesciunt soluta. Delectus!
              </p>
            </div>
          </div>
        </div>
        <Article />
      </div>
    </>
  );
};

export default Blog;
