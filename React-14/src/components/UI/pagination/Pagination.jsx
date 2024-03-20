import React from "react"
import {getPagesArray} from "../../../utils/pages"

//в цьому компоненті нам необхідно отримувати номер поточної сторінки ,функція яка змінює номер і масив на основі якого необхідно отрисовувати елементи 
const Pagination = (totalPages, page,changePage) => {//totalPages - пропс за яким ми знаєм скільки у нас сторінок 
    let pagesArray= getPagesArray(totalPages)//функція яка змінює номер сторінки та показує номер поточної
    return (
        <div className='page__wrapper'>
           {pagesArray.map(p=>
           <span
            onClick={()=>changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
            >{p}</span>
           )}
         </div>
    )
}

export default Pagination