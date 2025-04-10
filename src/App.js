import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  const [post, setPost] = useState({ title: "", body: "" }); //хук usestate

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        {/*УПРАВЛЯЕМЫЙ КОМПОНЕНТ*/}
        <MyInput
          value={post.title}
          onChange={(e) =>
            setPost({ ...post, title: e.target.value })
          } /*ИЗ ИВЕНТА С ПОЛЯ ТАРГЕТ ДОСТАЕМ ПОЛЕ VALUE И ПОМЕЩАЕМ ЕГО В СОСТОЯНИЕ*/
          type="text"
          placeholder="Название поста"
        />
        {/* НЕУПРАВЛЯЕМЫЙ\НЕКОНТРОЛИРУЕМЫЙ КОМПОНЕНТ */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
