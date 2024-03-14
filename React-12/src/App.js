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
import { getPageCount, getPagesArray } from './utils/pages';
 
function App() {
    const [posts,setPosts] = useState ([]) 
    const [filter,setFilter] = useState({sort:"",query:""})
    const [modal, setModal] = useState(false) 
    const [totalPages, setTotalPages] = useState(0) //створюєм стан в якому будем зберігати загальну кількість сторінок 
    const [limit, setLimit] = useState(10)//створюєм окремий стан для ліміту
    const [page, setPage] = useState(1)//створюєм окремий стан для номеру сторінки
    const sortedAndSearchedPosts = usePosts(posts,filter.sort , filter.query)  

    let pagesArray= getPagesArray(totalPages)//тут визиваєм функцію при якій реалізуєм кнопки при нажатті яких буде змінюватись сторінка

    const [fetchPosts, isPostsLoading , postError] = useFetching(async ()=> {
      const response = await PostService.getAll(limit,page)//передаєм параметри в функцію getAll нашого постсервісу (тепер сервер зрозуміє що нам потрібно реалізувати нашу пагінацію і поверне нам x-total-count )
        setPosts(response.data)//тут сетим поле data у response
        const totalCount = response.headers['x-total-count']//тут ми достаємо загальну кількість постів (цю загальну кількість постів і ліміт передаємо в наступну функцію )
        setTotalPages(getPageCount(totalCount,limit))//в цю функцію ми передаєм загальну кількість постів а другим параметром ліміт
    })
    
    useEffect(()=> {//useEffect буде слідкувати за змінами на сторінці і ми будем отримувати необхідні дані
      fetchPosts() //щоб визвати функцію fetchPosts потрібно в useEffect в масив залежності додати page
    },[page])

    const createPost = (newPost) =>{
      setPosts([...posts,newPost])
      setModal(false) 
    }

    const removePost = (post) => { 
       setPosts(posts.filter(p => p.id !== post.id))
    }

    //цією фунцією ми підгружаєм нову порцію даних при переході на іншу сторінку 
    const changePage = (page) =>{//ця функція змінює номер сторінки і при її зміні змінює дані на ній 
      setPage(page)
      //коли ми змінили номер сторінки потрібно визвати функцію fetchPosts (всередині функції ми уже передаєм запрос на необхідні для нас ліміти і номер сторінки)
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
         <div className='page__wrapper'>
           {pagesArray.map(p=>//тут рисуєм кнопки через функцію map 
           <span
            onClick={()=>changePage(p)}//при нажатті на кнопку будем змінювати стан page за допомогою функції changePage
            key={p}// додаєм ключ за номером сторінки (р) 
            className={page === p ? 'page page__current' : 'page'}//тут робим умову - якщо елемент ітерації у функції map рівняється номеру поточної сторінки то будуть додаватись одні стилі , в іншому випадку інші стилі
            >{p}</span>//для кожного елементу створюєм кнопку 
           )}
         </div>
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







