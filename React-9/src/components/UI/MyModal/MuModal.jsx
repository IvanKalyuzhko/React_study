import React from "react"
import cl from "./MyModal.module.css" //Імпортуєм стилі

const MyModal = ({children, visible, setVisible}) => {
//children - пропс який поміщає в модальне вікно все що нам завгодно
//visible - пропс який відповідає за видимість/невидимість модального вікна
//setVisible - функція яка буде скривати модальне вікно при нажатті на темну область вікна


//створюєм механізм який відображає/скриває модальне вікно 
    const rootClasses = [cl.myModal]
    if (visible) { //в більш розгорнутому варіанті записується отак visible === true
        rootClasses.push(cl.active) //cl.active - регулює механізм який відображає/скриває модальне вікно 
        //якщо visible === true то додається ще один клас cl.active
    }
    return (
        <div className={rootClasses.join(' ')/*join(' ') - повертає рядок */} onClick={() => setVisible(false)/*цією функцією ми при нажатті мишкою при включеному модальному вікну закриваєм модальне вікно*/}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()/*цією функцією ми відміняєм закривання модального вікна при нажатті мишкою саме на блок активного модального вікна*/}>
              {children}
            </div>
        </div>
    )
}

export default MyModal