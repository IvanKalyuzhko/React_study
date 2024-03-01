import React from "react";

//props - певні вхідні дані які може приймати компонент 
const PostItem = (props) => {
    return (
       <div className='post'>
         <div className='post__content'>
           <strong>{props.number}.{props.post.title}</strong> {/*використовуємо props за допомогою звертання до поля обєкту (достаєм заголовок і id) */}
          <div>
            {props.post.body}{/*використовуємо props за допомогою звертання до поля обєкту (достаєм опис посту) */}
          </div>
         </div>
          <div className='post__btns'>
           <button>Видалити</button>
          </div>
      </div>
    )
}

export default PostItem;