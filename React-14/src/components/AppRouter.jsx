import React, { useContext } from 'react';
import { Routes, Route} from 'react-router-dom';
import {privateRoutes, pablicRoutes} from '../router'
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
   
    const {isAuth,isLoading} = useContext(AuthContext) //тут ми отримуєм доступ до перемінної isAuth (як аргумент передаєм сюди контекст - AuthContext)
    if(isLoading) { // тут робим умову (якщо isLoading = true то  )
        return <Loader/> // тут необхідно повернути якийсь jsx ( щоб поки йшла загрузка показувати якийсь макет або зображення)

    }

    return (
     isAuth
      ?   <Routes> 
            {privateRoutes.map(route =>
             <Route Component={route.component} 
               path={route.path}
               exact={route.exact}
               // тут додаєм ключ на маршрути 
               key={route.path}// в якості ключа на маршрути використаєм поле path так як воно завжди унікальне 
              />
             )}
          </Routes>
      :  <Routes>
             {pablicRoutes.map(route =>
              <Route Component={route.component}
               path={route.path}
               exact={route.exact}
               // тут додаєм ключ на маршрути 
               key={route.path}// в якості ключа на маршрути використаєм поле path так як воно завжди унікальне 
               />
              )}
         </Routes>
    );
};

export default AppRouter;