import React, { useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/СlassCounter';
import "./styles/App.css"//імпортували стилі CSS
import PostItem from './components/Postitem';
import Postlist from './components/Postlist';
import MyButton from './components/UI/Button/MyButton'
 
function App() {
    const [posts,setPosts] = useState ( [
      {id:1, title:"EXEMPLE props" , body :"Тут опис самого посту" },
      {id:2, title:"EXEMPLE props 2" , body :"можем прописувати любі дані" },
      {id:3, title:"EXEMPLE props 3" , body :"любого компоненту де звертаємось через props" },
    ]) // Створили стан із масивом постів
    
  return (
     <div className="App"> 
      <form>
        <input type="text" placeholder='Назва посту'/>
        <input type="text" placeholder='Опис посту'/>
        <MyButton >Створити пост</MyButton>
      </form>
         <Postlist posts={posts} title="Список постів 1"/>
     </div>
  )
}

export default App;

//Хуки - певні функції ,які дає React . Їх можна використовувати у функціональних компонентах або у своїх особистих хуках 
//Хуки можна використовувати тільки на верхньому рівні вкладеності (тобто ми не можем вкладати хуки у певні функції/цикли/умови)

//useState - хук управління станом