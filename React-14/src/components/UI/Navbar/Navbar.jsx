import React from 'react';
import { Link } from 'react-router-dom';//Link це посилання для оновлення сторінки без перезавантаження

const Navbar = () => {
    return (
        <div className="navbar">
              <div className="navbar__links">
                {/*використовуєм компонент to замість href*/}
                <Link to="/about">Ще одна сторінка</Link>{/*використовуєм компонент Link для того щоб сторінка не перезагружалась при переході на іншу сторінку*/}
                <Link to="/posts">Сторінка з постами</Link>{/*використовуєм компонент Link для того щоб сторінка не перезагружалась при переході на іншу сторінку*/}
                <Link to="/login">Увійти</Link>{/*використовуєм компонент Link для того щоб сторінка не перезагружалась при переході на іншу сторінку*/}
              </div>
        </div>
    );
};

export default Navbar;