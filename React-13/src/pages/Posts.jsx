import React, { useEffect, useMemo, useState } from 'react'
import Postlist from '../components/Postlist';
import MyButton from '../components/UI/Button/MyButton'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MuModal';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
 
function Posts() {
    const [posts,setPosts] = useState ([]) 
    const [filter,setFilter] = useState({sort:"",query:""})
    const [modal, setModal] = useState(false) 
    const [totalPages, setTotalPages] = useState(0) 
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts,filter.sort , filter.query)  

    const [fetchPosts, isPostsLoading , postError] = useFetching(async (limit,page /*додаєм сюди значення limit,page*/)=> {
      const response = await PostService.getAll(limit,page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    })
    
    useEffect(()=> {
      fetchPosts(limit,page/*додаєм сюди значення limit,page*/) 
    },[page])

    const createPost = (newPost) =>{
      setPosts([...posts,newPost])
      setModal(false) 
    }

    const removePost = (post) => { 
       setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) =>{ 
      setPage(page)
      fetchPosts(limit,page)//Щоб функція  fetchPosts працювала без допомоги useEffect можна в саму функцію для отримання посту приймати ліміти page 
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
         {/*тут додаєм компонент під список і вписуєм всі пропси (номерсторінки , функція що змінює номер та загальна кількість сторінок*/}
         <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
     </div>
  )
}

export default Posts;