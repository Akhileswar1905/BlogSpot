import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  let c = 1;
  const posts = [
    {
      id: 0,
      author: `Akhil${c++}`,
      cats: ["Technology", "Music"],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos eveniet blanditiis officiis. Non exercitationem beatae laudantium optio, iure unde quisquam alias facere blanditiis neque cumque, iusto praesentium voluptatum reprehenderit vero deserunt voluptatem, sit ea officia? Et quia accusamus eos.",
      title: "Title 1",
      time: "1 hour ago",
    },
    {
      id: 1,
      author: `Akhil${c++}`,
      cats: ["Sports", "Music"],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos eveniet blanditiis officiis. Non exercitationem beatae laudantium optio, iure unde quisquam alias facere blanditiis neque cumque, iusto praesentium voluptatum reprehenderit vero deserunt voluptatem, sit ea officia? Et quia accusamus eos.",
      title: "Title 2",
      time: "2 hour ago",
    },
    {
      id: 2,
      author: `Akhil${c++}`,
      cats: ["Technology", "Music"],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos eveniet blanditiis officiis. Non exercitationem beatae laudantium optio, iure unde quisquam alias facere blanditiis neque cumque, iusto praesentium voluptatum reprehenderit vero deserunt voluptatem, sit ea officia? Et quia accusamus eos.",
      title: "Title 3",
      time: "3 hour ago",
    },
    {
      id: 3,
      author: `Akhil${c++}`,
      cats: ["Technology", "Health"],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos eveniet blanditiis officiis. Non exercitationem beatae laudantium optio, iure unde quisquam alias facere blanditiis neque cumque, iusto praesentium voluptatum reprehenderit vero deserunt voluptatem, sit ea officia? Et quia accusamus eos.",
      title: "Title 4",
      time: "4 hour ago",
    },
    {
      id: 4,
      author: `Akhil${c++}`,
      cats: ["Technology", "Anime"],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos eveniet blanditiis officiis. Non exercitationem beatae laudantium optio, iure unde quisquam alias facere blanditiis neque cumque, iusto praesentium voluptatum reprehenderit vero deserunt voluptatem, sit ea officia? Et quia accusamus eos.",
      title: "Title 5",
      time: "5 hour ago",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
