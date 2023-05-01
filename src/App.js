import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/pages/Home/Home";
// import About from "./components/pages/About/About";
import Blog from "./components/pages/Blog/Blog";
import NewBlog from "./components/pages/NewBlog/NewBlog";
import Settings from "./components/pages/Settings/Settings";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Profile from "./components/pages/Profile/Profile";
import Auth from "./components/pages/Auth/Auth";
import MyBlogs from "./components/pages/MyBlogs/MyBlogs";
import SavedBlogs from "./components/pages/SavedBlogs/SavedBlogs";
const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/saved-blogs" element={<SavedBlogs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </Sidebar>
  );
};

export default App;
