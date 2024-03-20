import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PostIdPages from "../pages/PostIdPages";
import Login from "../pages/Login";

//тут будемо описувати/вказувати маршрути на сторінки 
export const privateRoutes = [ // тут створили масив тільки для авторизованих користувачів (ті що вже залогінились)
    {path:'/about', component : About , exact : true},
    {path:'/posts', component : Posts , exact : true},
    {path:'/posts/:id', component : PostIdPages , exact : true},
]
export const pablicRoutes = [ // тут створили масив для всих користувачів
    {path:'/login', component : Login, exact : true},
    {path:'*', component : NotFound , exact : true},
    {path:"/", component : Home , exact : true},
]