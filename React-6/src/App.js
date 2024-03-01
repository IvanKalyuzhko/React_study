import React, { useRef, useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/СlassCounter';
import "./styles/App.css"//імпортували стилі CSS
import PostItem from './components/Postitem';
import Postlist from './components/Postlist';
import MyButton from './components/UI/Button/MyButton'
import MyInput from './components/UI/Input/MyInput'
 
function App() {
    const [posts,setPosts] = useState ( [
      {id:1, title:"EXEMPLE props" , body :"Тут опис самого посту" },
      {id:2, title:"EXEMPLE props 2" , body :"можем прописувати любі дані" },
      {id:3, title:"EXEMPLE props 3" , body :"любого компоненту де звертаємось через props" },
    ]) // Створили стан із масивом постів

    const [post,setPost] = useState ({title:"",body:""})
    const [body, setBody] = useState ("")

    const addNewPost = (e) =>{
      e.preventDefault()//цією функцією ми запобігаєм default-ну поведінку браузера (щоб синхронізувати свіже вписану інформацію користувача )
      //Тобто цією функцією запобігаємо обновленню сторінки при нажатті кнопки
      setPosts([...posts,{...post,id:Date.now()}])//тут ми створюєм новий обєкт прямо в масиві, розвернути інфу із посту та додати id
      //тут ми верхній обєкт додаєм у масив постів
      setPost({title:"",body:""})
      //після створення посту будуть очищатися input (обнуляєм)
     }
    
    
  return (
     <div className="App"> 
      <form>
        {/*Управляємий компонент*/}
        <MyInput 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})/*тут визиваєм функцію setPost та передаєм туди обєкт(розгортаєм старий пост та перезатераєм потрібне нам поле в імпут)*/}
        type="text" 
        placeholder='Назва посту'/>
        {/*Тепер ми получаєм дані за допомогою керуючого Input */}
        {/*Неуправляємий/неконтролюючий компонент */}
        <MyInput
         value={post.body}
         onChange={e => setPost({...post, body: e.target.value})/*тут визиваєм функцію setPost та передаєм туди обєкт(розгортаєм старий пост та перезатераєм потрібне нам поле в імпут)*/}
        type="text"
        placeholder='Опис посту'/>
        <MyButton onClick={addNewPost /*додаєм функцію*/}>Створити пост</MyButton>
      </form>
         <Postlist posts={posts} title="Список постів 1"/>
     </div>
  )
}

export default App;

//Хуки - певні функції ,які дає React . Їх можна використовувати у функціональних компонентах або у своїх особистих хуках 
//Хуки можна використовувати тільки на верхньому рівні вкладеності (тобто ми не можем вкладати хуки у певні функції/цикли/умови)

//useState - хук управління станом
//useRef - хук за допомогою якого ми можем отримувати напряму доступ до дом-елемента (маніпулювати дом-деревом напряму не рекомендують в Реакт ,але є ситуації коли це необхідно)