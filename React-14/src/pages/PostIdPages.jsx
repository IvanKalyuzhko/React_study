import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching';


//на основі id із юрл що вказав користувач ми можем відправити запрос на сервер про цей id за допомогою useParams для отримання цього посту
const PostIdPages = () => {
    const params = useParams() // цей хук повертає обєкт в якого id відповідає вибору поста користувача
    const[post,setPost]= useState({}) //тут розміщуєм те що нам поверне сервер (пост по id)
    const[comments,setComments]= useState([])// тут по дефолту буде пустий масив
    // використаєм хук useFetching (для отправки запросу ) який повертає масив де перший елемент функція , другий - індикатор загрузки і 3 - ошибка
    const[fetchPostById,isLoading,error] = useFetching(async(id)=> {// параметром хук приймає callback який буде повернутий у виглячді обгортки першим елементом цього масиву
        const response = await PostService.getById(id) // тут ми дьоргаєм PostService , id ми достаєм із параметрів
        setPost(response.data) // після того як ми отримаєм відповідь від сервера ми поміщаєм поле data в стан за функцією setPost
    })

    //тут реалізуєм запрос на отримання коментарів
    const[fetchComments,isComLoading,comError] = useFetching(async(id)=> {
        const response = await PostService.getCommentsByPostId(id) 
        setComments(response.data) 
    })

    useEffect(()=> {// тут на першу отресовку компонету будем отримувати дані із сервера 
        fetchPostById(params.id) // функцію яку нам повернув хук  визиваєм у useEffect та получаєм id із параметрів
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>Сторінка {params.id} посту</h1> {/* {params.id}- вказує id посту (відображає номер посту) який вибрав користувач*/}
            {isLoading // тут обробляєм індикацію загрузки через умову
              ?<Loader/>
              : <div>{post.id}{post.title}</div> // виводим інформацію про пост у блок і виведем його id
            }
            <h1>тут будуть коментарі до посту</h1>
            {isComLoading
              ?<Loader/>
              :<div>
                {/*вставляєм інфу в коментарі для користувача виходячи із інформації яку нам передає сервер по його структурі */}
                {comments.map(comm => // тут за допомогою map ми (ітерація) та для уожного коменту відресуєм окремий шаблон
                    <div style={{marginTop:15}}>
                        <h5>{comm.email}</h5> 
                        <div>{comm.body}</div>
                    </div>
                    )}
              </div>
            }
        </div>
    );
};

export default PostIdPages;