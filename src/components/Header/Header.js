import "./Header.css";
import logo from "../../Blog Spot-1.jpg";

// const handleMode = () => {
//   document.body.style.backgroundColor = "#000";
//   document.body.style.color = "#fff";
// };

const Header = () => {
  return (
    <div className="box">
      <div className="headerTitles">
        <span className="small">
          <img src={logo} alt="" className="logo" />
          <div className="titles">
            Blog Spot
            <p className="tagline" style={{ fontSize: "15px" }}>
              Spot for all your thoughts
            </p>
          </div>
        </span>
      </div>
      {/* <div className="btn">
        <button onClick={handleMode}>Dark Mode</button>
      </div> */}
      <div className="headerImg">
        <img
          src="https://images.unsplash.com/photo-1649766772213-2dce96b610c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Header;
