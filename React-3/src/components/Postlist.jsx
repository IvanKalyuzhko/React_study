import React from "react"
import PostItem from "./Postitem"

const Postlist = ({posts,title}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{/*додаєм стиль CSS- style={{textAlign:"center"}} */}
               {title}
            </h1> 
           {posts.map(post => //тут масив звичайних обєктів ми переробили в масив React елементів через функцію map
            <PostItem post={post} key={post.id}/> // як правило ми використовуєм id обєкта яке використовуєм до key
             // коли ми створюєм списки то обовязковою умовою є вказування певного key (цей key має зберігати певне унікальне значення)
             //Ключі (key) дозволяють алгоритмам Реакту найбільш ефективно робити рендеринг і перерисовувати не весь список , а тільки ті елементи в яких відбулися зміни 
            ) }
        </div>
    )
}

export default Postlist