import React, { useMemo, useState } from 'react'
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
    ]) 

    const [selectedSort, setSelectedSort] = useState("") 
    const [searchQuery,setSearchQuery] = useState("") //створюєм стан щоб керувати input
    //Для того щоб реалізувати пошук необхідно зробити його певну фільтрацію і удаляти непотрібні елементи із масиву(але якщо їх видаляти то ми не зможем повертати їх назад)

    const sortedPosts = useMemo(() => {
      if(selectedSort) { //якщо selectedSort існує то ми будем повертати відсортований масив
        return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts //в іншому випадку буде повертатися масив постів
    },[selectedSort,posts])

    const sortedAndSearchedPosts = useMemo(()=>{
      return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))//тут ми зробили так щоб в масиві залишились тілки ті пости ,назви яких містять потрібні для нас пошуковий запит
    },[searchQuery,sortedPosts])//тепер в масив залежності попадає пошуковий рядок і уже відсортований масив
    //toLowerCase() - функція яка ігнорує регістр 
     
    const createPost = (newPost) =>{
      setPosts([...posts,newPost])
    }
    const removePost = (post) => { 
       setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPosts = (sort) =>{
      setSelectedSort(sort)
    }
  return (
     <div className="App">
         <PostForm create={createPost}/>
         <hr style={{margin:"15px 0"}}/>
         <div>
          <MyInput //створюю вікно записуу
               value={searchQuery}
               onChange={e => setSearchQuery(e.target.value)}
               placeholder='Пошук'
          />
          <MySelect 
            value={selectedSort}
            onChange={sortPosts} 
            defaultValue="Сортування"
            options={[
              {value:"title", name:"По назві"},
              {value:"body", name:"По опису"},
            ]}
          />
         </div>
         {sortedAndSearchedPosts.length!==0 
            ?<Postlist remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>
            :<div><h1 style={{textAlign:'center'}}>Пости не знайдено</h1></div>
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