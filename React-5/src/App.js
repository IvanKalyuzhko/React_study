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

    const [title,setTitle] = useState ("назва в середині")
    const bodyInputRef = useRef()
    const addNewPost = (e) =>{
      e.preventDefault()//цією функцією ми запобігаєм default-ну поведінку браузера (щоб синхронізувати свіже вписану інформацію користувача )
      //Тобто цією функцією запобігаємо обновленню сторінки при нажатті кнопки
      console.log(bodyInputRef.current.value)
    }
    
  return (
     <div className="App"> 
      <form>
        {/*Управляємий компонент*/}
        <MyInput 
        value={title}
        onChange={e => setTitle(e.target.value)/*цією функцією ми відслідковуємо що користувач вводить*/}
        type="text" 
        placeholder='Назва посту'/>
        {/*Тепер ми получаєм дані за допомогою керуючого Input */}
        {/*Неуправляємий/неконтролюючий компонент */}
        <MyInput
        ref={bodyInputRef}
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