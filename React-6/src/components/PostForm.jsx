import React from "react"
import MyInput from "react"
import MyButton from "react"

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
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})/*тут визиваєм функцію setPost та передаєм туди обєкт(розгортаєм старий пост та перезатераєм потрібне нам поле в імпут)*/}
          type="text" 
          placeholder='Назва посту'
        />
        {/*Тепер ми получаєм дані за допомогою керуючого Input */}
        {/*Неуправляємий/неконтролюючий компонент */}
        <MyInput
         value={post.body}
         onChange={e => setPost({...post, body: e.target.value})/*тут визиваєм функцію setPost та передаєм туди обєкт(розгортаєм старий пост та перезатераєм потрібне нам поле в імпут)*/}
         type="text"
         placeholder='Опис посту'
        />
        <MyButton onClick={addNewPost /*додаєм функцію*/}>Створити пост</MyButton>
      </form>
    )
}

export default PostForm