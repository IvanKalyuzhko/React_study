import React, { useRef, useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/СlassCounter';
import "./styles/App.css"//імпортували стилі CSS
import PostItem from './components/PostItem';
import Postlist from './components/Postlist';
import MyButton from './components/UI/Button/MyButton'
import MyInput from './components/UI/Input/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/Select/MySelect';
 
function App() {
    const [posts,setPosts] = useState ( [
      {id:1, title:"EXEMPLE props" , body :"Тут опис самого посту" },
      {id:2, title:"EXEMPLE props 2" , body :"можем прописувати любі дані" },
      {id:3, title:"EXEMPLE props 3" , body :"любого компоненту де звертаємось через props" },
    ]) // Створили стан із масивом постів

    const [selectedSort, setSelectedSort] = useState("") // створюєм двухстороннє звязування
      //за допомогою useState ініціалізуєм

    const createPost = (newPost) =>{
      setPosts([...posts,newPost])
    }
    //Отримуємо post із дочірнього компоненту
    const removePost = (post) => { //функція обратного визову
       setPosts(posts.filter(p => p.id !== post.id))//Якщо id якогось елемента масива равен тому id якого ми передали постом то тоді цей елемент із масиву удаляєм
    }//функція filter повертає новий масив отфідьтрований по якійсь умові

    const sortPosts = (sort) =>{
      setSelectedSort(sort)
      setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort]))) //передаєм сюди те що приходить нам із самого селекту(це буде одразу та опція яку вибрав користувач)
      //нам необхідно цей масив відсортувати після вибору користувача
      //ми розвертаєм пости у новий масив і сортуєм уже новий масив (тобто ми мутуєм копію масива , не мутувавши стан напряму )
      //localeCompare - функція для зрівнювання рядків (зрівнюєм поле обєкта - а і поле обєкта - b)
    }
    
  return (
     <div className="App"> 
         <PostForm create={createPost}/>
         <hr style={{margin:"15px 0"}/*Горизонтальний роздільник */}/>
         <div>
          <MySelect //випадаючий список
          //Передаєм всі необхідні пропси
            value={selectedSort}
            onChange={sortPosts} 
            defaultValue="Сортування"
            options={[//передаєм масив опцій для сортування 
              {value:"title", name:"По назві"},
              {value:"body", name:"По опису"},
            ]}
          />
         </div>
         {/*Условна отрисовка */}
         {posts.length!==0 //вказуєм умову (тут прописуємо що довжина масиву не дорівнює 0)
            ?<Postlist remove={removePost} posts={posts} title="Список постів 1"/>//тут тернальним оператором вказуєм - якщо довжина масиву не дорівнює 0 то відображаєм список постів
            :<div><h1 style={{textAlign:'center'}}>Пости не знайдено</h1></div>//тут тернальним оператором вказуєм - в іншому випадку вказуєм блок дів із прописом 
         }
     </div>
  )
}

export default App;

//Хуки - певні функції ,які дає React . Їх можна використовувати у функціональних компонентах або у своїх особистих хуках 
//Хуки можна використовувати тільки на верхньому рівні вкладеності (тобто ми не можем вкладати хуки у певні функції/цикли/умови)

//useState - хук управління станом
//useRef - хук за допомогою якого ми можем отримувати напряму доступ до дом-елемента (маніпулювати дом-деревом напряму не рекомендують в Реакт ,але є ситуації коли це необхідно)