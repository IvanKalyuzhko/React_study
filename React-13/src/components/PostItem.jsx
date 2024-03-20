import React from "react";
import MyButton from '../components/UI/Button/MyButton'
import {useNavigate } from 'react-router-dom';

//props - певні вхідні дані які може приймати компонент 
const PostItem = (props) => {
  //Переходи на інші сторінки ми можем робити за допомогою спеціального хука useNavigate
    const navigate = useNavigate()//створюєм функцію щоб для кожного посту було своє посилання
    return (
       <div className='post'>
         <div className='post__content'>
           <strong>{props.post.id}.{props.post.title}</strong> {/*використовуємо props за допомогою звертання до поля обєкту (достаєм заголовок і id) */}
          <div>
            {props.post.body}{/*використовуємо props за допомогою звертання до поля обєкту (достаєм опис посту) */}
          </div>
         </div>
          <div className='post__btns'>
           <MyButton onClick={() => navigate(`/posts/${props.post.id}`)} >Відкрити</MyButton> {/*тут створюєм динамічний шлях за яким будем вказувати id посту якого вибере користувач (треба створити компонент за яким користувач переходитиме на сторінку посту )*/}
           <MyButton onClick={() => props.remove(props.post)} >Видалити</MyButton>
          </div>
      </div>
    )
}

export default PostItem;