import "./Header.css";

const Header = () => {
  return (
    <div className="box">
      <div className="headerTitles">
        <span className="large">React & NodeJS</span>
        <span className="small">Blog Spot</span>
      </div>
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
