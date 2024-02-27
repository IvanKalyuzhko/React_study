import React, { useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/СlassCounter';
import "./styles/App.css"//імпортували стилі CSS
import PostItem from './components/Postitem';
 
function App() {
  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <PostItem post={{id:1, title:"EXEMPLE props" , body :"Тут опис самого посту" }}/>
      <PostItem post={{id:2, title:"EXEMPLE props 2" , body :"можем прописувати любі дані" }}/>
      <PostItem post={{id:3, title:"EXEMPLE props 3" , body :"любого компоненту де звертаємось через props" }}/>
    </div>
  );
}

export default App;

//Хуки - певні функції ,які дає React . Їх можна використовувати у функціональних компонентах або у своїх особистих хуках 
//Хуки можна використовувати тільки на верхньому рівні вкладеності (тобто ми не можем вкладати хуки у певні функції/цикли/умови)

//useState - хук управління станом