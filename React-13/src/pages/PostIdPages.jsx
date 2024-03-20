import React from 'react';
import { useParams } from 'react-router-dom';

//на основі id із юрл що вказав користувач ми можем відправити запрос на сервер про цей id за допомогою useParams для отримання цього посту
const PostIdPages = () => {
    const params = useParams() // цей хук повертає обєкт в якого id відповідає вибору поста користувача
    return (
        <div>
            <h1>Сторінка {params.id} посту</h1> {/* {params.id}- вказує id посту (відображає номер посту) який вибрав користувач*/}
        </div>
    );
};

export default PostIdPages;