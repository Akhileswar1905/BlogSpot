import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Blog from "./components/pages/Blog/Blog";
import NewBlog from "./components/pages/NewBlog/NewBlog";
import Settings from "./components/pages/Settings/Settings";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";

const App = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </Sidebar>
  );
};

export default App;
