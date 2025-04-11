import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';



const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: "", body: "" }); //хук usestate
    
    const addNewPost = (e) => {
        e.preventDefault();
    
         const newPost = {
            ...post, id: Date.now()
         }
         create(newPost)
        setPost({ title: "", body: "" });
      };
    
    return (
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
    );
};

export default PostForm;