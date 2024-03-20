import React from 'react';
import { Routes, Route} from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PostIdPages from "../pages/PostIdPages";

const AppRouter = () => {
    return (
        <Routes>
         <Route path="/about" element={<About />} /> {/*тут створюєм шлях(path) до сторінки до якої хочем підключатись (element={<About />})*/}
         <Route path="/posts" element={<Posts />} /> {/*тут створюєм шлях(path) до сторінки до якої хочем підключатись (element={<Posts />})*/}
         <Route exact path="*" element={<NotFound />} />{/* "*"- вказує шлях до сторінки при неправильному юрл адресу*/}
         <Route path="/" element={<Home  />} />{/*"/"- відкриває зазначену сторінку при першому відкриті програми(головна сторінка)*/}
         <Route exact path="/posts/:id" element={<PostIdPages  />} />{/*/:id - перекидає користувача за вказаним ним id адресом (це динамічний шлях)*/}
         {/*exact path - таким чином роутер буде розпізнавати посилання як різні (/posts) */}
        </Routes>
    );
};

export default AppRouter;