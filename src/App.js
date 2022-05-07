import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import { createContext, useState } from "react";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="blog/:id" element={<BlogDetails></BlogDetails>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
