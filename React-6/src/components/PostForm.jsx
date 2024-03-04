import React, { useState } from 'react'
import "../styles/App.css"//імпортували стилі CSS

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'',body:''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,id:Date.now()
        }
        create(newPost)
        setPost({title:"",body:""})
       }

    return (
       <form>
        {/*Управляємий компонент*/}
        <input 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})/*тут визиваєм функцію setPost та передаєм туди обєкт(розгортаєм старий пост та перезатераєм потрібне нам поле в імпут)*/}
          type="text" 
          placeholder='Назва посту'
        />
        {/*Тепер ми получаєм дані за допомогою керуючого Input */}
        {/*Неуправляємий/неконтролюючий компонент */}
        <input
         value={post.body}
         onChange={e => setPost({...post, body: e.target.value})/*тут визиваєм функцію setPost та передаєм туди обєкт(розгортаєм старий пост та перезатераєм потрібне нам поле в імпут)*/}
         type="text"
         placeholder='Опис посту'
        />
        <button onClick={addNewPost /*додаєм функцію*/}>Створити пост</button>
      </form>
    )
}

export default PostForm