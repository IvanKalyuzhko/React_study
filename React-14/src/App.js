import React, { useEffect } from "react"
import './styles/App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from "react";


function App () {
    const [isAuth, setIsAuth] = useState(false) // створюєм стан і функцію яка буде його змінювати 

    //щоб при оновленні сторінки користувача не вибивало із коментаря у якомусь посту до загальних постів необхідно зробити стан із індикацією
    //тут створюєм стан із індикацією для того щоб перевірити чи закінчився запит чи ні для того щоб користувача не редіректило на сторінку із загальними постами
    const[isLoading, setIsLoading] = useState(true)
    // тепер при моменті поки йде авторизація роутер у нас не працює і він почне працювати тільки після того коли стане відомо - авторизований користувач чи ні 

    //тут зробим функціонал для того щоб при оновленні сторінки користувача не вибивало із його авторизації на сторінки для неавторизованих користувачів
    useEffect(() => { // тут робим перевірку на авторизацію (при першому запуску програми ми будем провіряти чи авторизований користувач)
      if(localStorage.getItem('auth')){ // тут із localStorage отримуємо по ключу auth значення 
        setIsAuth(true) // якщо значення якесь є то  setIsAuth робим із значенням true
      } 
      setIsLoading (false) // робим стан false (без різниці чи залогінились чи ні)
    },[])
    return (
      // тут використовуєм Context як компонент(саме Provider який знаходиться всередині) та вказуєм які саме дані будуть знаходитись у Context
         <AuthContext.Provider value={{ // тут використовуєм пропс value
            isAuth,   //сюди передаєм стан 
            setIsAuth,//сюди передаєм функцію
            isLoading // передаєм в контекст для того щоб отримати його в AppRouter
         }}>
           <Router>
             <Navbar/>
             <AppRouter/>
           </Router>
         </AuthContext.Provider>
    )
}

export default App









