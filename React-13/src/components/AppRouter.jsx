import React from 'react';
import { Routes, Route} from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";

const AppRouter = () => {
    return (
        <Routes>
         <Route path="/about" element={<About />} /> {/*тут створюєм шлях(path) до сторінки до якої хочем підключатись (element={<About />})*/}
         <Route path="/posts" element={<Posts />} /> {/*тут створюєм шлях(path) до сторінки до якої хочем підключатись (element={<Posts />})*/}
        </Routes>
    );
};

export default AppRouter;