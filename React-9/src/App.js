import React, { useEffect, useMemo, useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/СlassCounter';
import "./styles/App.css"//імпортували стилі CSS
import PostItem from './components/PostItem';
import Postlist from './components/Postlist';
import MyButton from './components/UI/Button/MyButton'
import MyInput from './components/UI/Input/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/Select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MuModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
 
function App() {
    const [posts,setPosts] = useState ([]) 
    const [filter,setFilter] = useState({sort:"",query:""})
    const [modal, setModal] = useState(false) 
    const sortedAndSearchedPosts = usePosts(posts,filter.sort , filter.query) //тут ми визиваєм створений хук всередині компоненту 
    //Цей стан буде відповідати за відображення сторінки яка прогружається інтернетом (тут ми створим Заголовок "Загрузка" для показу користувачеві поки пости прогружаються сервером)
    const [isPostsLoading, setIsPostsLoading] = useState(false) //тут створюєм стан по замувчуванню який буде false
    
    useEffect(()=> {
      fetchPosts() //цією функцією ми одразу підгружаєм пости із сервера для їх показу на сторінці користувача
    },[])

    const createPost = (newPost) =>{
      setPosts([...posts,newPost])
      setModal(false) 
    }

    //Створюєм функцію для відправки запросів на сервер , отримувати дані і поміщати в наш стан з постами
    async function fetchPosts() { // функцію робим асинхронною (додаєм async) щоб використовувати await
      setIsPostsLoading(true)// перед тим як відправити запит ми робим значення true 
      //const response = await axios.get("https://jsonplaceholder.typicode.com/posts")// тут створюєм значення де буде поміщений результат отримання запросу
      const posts = await PostService.getAll()//тут визиваєм метод getAll який і поаертає нам список постів
      setPosts(posts)//тут визиваєм функцію в якій ми отримуєм те що отримали в тілі відповіді (ті дані що повернув нам сервер щоб нам загружались ті дані сервера)
      setIsPostsLoading(false)// після того як запит закінчився (коли пости прогрузились) , робим значення false
    }//axios.get - гет запрос на отримання даних в який вставляєм адресу сервера на отримання даних

    const removePost = (post) => { 
       setPosts(posts.filter(p => p.id !== post.id))
    }
  return (
     <div className="App">
         <button onClick={fetchPosts}>Get Posts</button> {/*Тут створив кнопку для визову функції fetchPosts*/}
         <MyButton onClick={() => setModal(true)}>
          Створити модальне вікно
         </MyButton> 
         <MyModal visible={modal} setVisible={setModal}> 
          <PostForm create={createPost}/>
         </MyModal>
         
         <hr style={{margin:"15px 0"}}/>
         <PostFilter 
         filter ={filter}
         setFilter={setFilter}
         />
         {isPostsLoading // тут робим умову в якій при значенні true буде відбуватись умова 
          ?<h1>Загрузка</h1>// значення true
          :<Postlist remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>// значення false
         }
     </div>
  )
}

export default App;

//Хуки - певні функції ,які дає React . Їх можна використовувати у функціональних компонентах або у своїх особистих хуках 
//Хуки можна використовувати тільки на верхньому рівні вкладеності (тобто ми не можем вкладати хуки у певні функції/цикли/умови)

//useState - хук управління станом
//useRef - хук за допомогою якого ми можем отримувати напряму доступ до дом-елемента (маніпулювати дом-деревом напряму не рекомендують в Реакт ,але є ситуації коли це необхідно)
//useMemo(callback,[]) - хук першим параметром приймає деякий callback (деяку функцію обратного визову) , а другим параметром приймає масив залежності (цей хук робе обчислення ,запамятовуючи результат цих обчислень і кешує)
// callback - має повертати результат якихось обчислень (callback буде визваний в тому випадку коли якась із залежних в масиві змінить своє значення)
//Щоб робити запроси на сервер потрібна бібліотека axios (вводим у термінал npm i axios )
//useEffect(callback,[]) - використовується багато разів у компоненті (скільки нам буде потрібно)
//useEffect(callback,[]) - хук схожий на useMemo , але коли масив залежності ([]) пустий , callback що ми передаєм в useEffect відпрацює лише один раз 
//Щоб слідкувати за змінами в useEffect необхідно додати якісь залежності в масив ([])







