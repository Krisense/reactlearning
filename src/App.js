import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";


function App() {
    const [posts, setPosts] = useState([
      {id:1, title: 'Javascript 1', body: 'Description'},
      {id:2, title: 'Javascript 2', body: 'Description'},
      {id:3, title: 'Javascript 3', body: 'Description'}

    ])
    const [posts2, setPosts2] = useState([
      {id:1, title: 'Python 1', body: 'Description'},
      {id:2, title: 'pYTHON 2', body: 'Description'},
      {id:3, title: 'python 3', body: 'Description'}

    ])
 



  return (
    <div className="App">
        <PostList posts = {posts} title ="Список постов JS"/>
        <PostList posts = {posts2} title ="Список постов Python"/>
        

    </div>
  );
}

export default App;
