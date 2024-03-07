import React from "react"
import classes from "./MyButton.module.css" // Імпортуєм CSS

const MyButton = ({children , ...props}) => {// Робим деструктуризацію , виципляєм пропс children
    return (
        <button {...props /*весь обєкт ми розвертаєм тут */} className={classes.myBtn}> 
        {/*всі пропси які ми розвертаєм у button будуть улітати у цю кнопку */}
            {children /* */} 
        </button>
    )
}

export default MyButton

//За замовчуванням Реакт не знає яке місце компоненту необхідно додавати у вложені елементи 
// Цю проблему ми можем вирішити за допомогою props.children