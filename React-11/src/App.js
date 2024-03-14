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
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
 
function App() {
    const [posts,setPosts] = useState ([]) 
    const [filter,setFilter] = useState({sort:"",query:""})
    const [modal, setModal] = useState(false) 
    const sortedAndSearchedPosts = usePosts(posts,filter.sort , filter.query)  
    const [fetchPosts, isPostsLoading , postError] = useFetching(async ()=> {
      const posts = await PostService.getAll()// тут отримуємо пости із сервера і засетим їх в стан
        setPosts(posts)
    })
    
    useEffect(()=> {
      fetchPosts() 
    },[])

    const createPost = (newPost) =>{
      setPosts([...posts,newPost])
      setModal(false) 
    }

    const removePost = (post) => { 
       setPosts(posts.filter(p => p.id !== post.id))
    }
  return (
     <div className="App">
         <button onClick={fetchPosts}>Get Posts</button> 
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
         {isPostsLoading 
          ?<Loader/>
          :<Postlist remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>
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







