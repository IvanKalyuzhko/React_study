import React from "react"
import PostItem from "./PostItem"

const Postlist = ({posts,title,remove}) => {
    if (!posts.length){
        return(
        <div>
          <h1  style={{textAlign:'center'}}>
              Пости не знайдено
           </h1>
         </div>
        )}
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{/*додаєм стиль CSS- style={{textAlign:"center"}} */}
               {title}
            </h1> 
           {posts.map((post,index) => //тут масив звичайних обєктів ми переробили в масив React елементів через функцію map
            <PostItem remove={remove} number={index+1} post={post} key={post.id}/> // як правило ми використовуєм id обєкта яке використовуєм до key
             // коли ми створюєм списки то обовязковою умовою є вказування певного key (цей key має зберігати певне унікальне значення)
             //Ключі (key) дозволяють алгоритмам Реакту найбільш ефективно робити рендеринг і перерисовувати не весь список , а тільки ті елементи в яких відбулися зміни 
            )/*Номер елемента у масиві ми отримуєм за допомогою index*/ }
        </div>
    )
}

export default Postlist