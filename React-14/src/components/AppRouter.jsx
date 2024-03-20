import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {privateRoutes, pablicRoutes} from '../router'

const AppRouter = () => {
    // робим доступ для користувачів за допомогою змінної isAuth яка буде відкривати пости для авторизованих користувачів
    const isAuth = false 
    return (
     isAuth // тут тернальним оператором вказуєм функцію за якою авторизований користувач зможе відкривати пости (privateRoutes) , в іншому випадку буде pablicRoutes
      ?   <Routes> 
            {/*Імпортуємо сюди масиви із шляхами на сторінки  */}
            {privateRoutes.map(route =>// тут ітеруємо масив 
             <Route Component={route.component} // тут для кожного компоненту масиву відресувати відповідний Route
               path={route.path}// тут передаєм шлях та як пропс передаєм компоненти
               exact={route.exact}
              />
             )}
          </Routes>
      :  <Routes>
             {pablicRoutes.map(route =>
              <Route Component={route.component}
               path={route.path}
               exact={route.exact}
               />
              )}
         </Routes>
    );
};

export default AppRouter;