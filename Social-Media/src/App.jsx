import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {


  const [selectedTab,setSelectedTab] =useState("Home")
  return (
   <PostListProvider>
     <div className="app-container">
      <SideBar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}></SideBar>
      <div className="Content">
        <Header></Header>
        
        {selectedTab==="Home" ? <PostList></PostList>:<CreatePost></CreatePost>}
        
        <Footer></Footer>
      </div>
    </div>
   </PostListProvider>
  );
}

export default App;
