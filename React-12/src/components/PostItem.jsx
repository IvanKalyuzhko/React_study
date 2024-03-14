import React from "react";
import MyButton from '../components/UI/Button/MyButton'

//props - певні вхідні дані які може приймати компонент 
const PostItem = (props) => {
    return (
       <div className='post'>
         <div className='post__content'>
           <strong>{props.post.id}.{props.post.title}</strong> {/*використовуємо props за допомогою звертання до поля обєкту (достаєм заголовок і id) */}
          <div>
            {props.post.body}{/*використовуємо props за допомогою звертання до поля обєкту (достаєм опис посту) */}
          </div>
         </div>
          <div className='post__btns'>
           <MyButton onClick={() => props.remove(props.post)} >Видалити</MyButton>
          </div>
      </div>
    )
}

export default PostItem;