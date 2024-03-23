import React from 'react';
import { Link } from 'react-router-dom';//Link це посилання для оновлення сторінки без перезавантаження
import MyButton from '../Button/MyButton';
import { AuthContext } from '../../../context';
import { useContext } from 'react';

const Navbar = () => {
  // тут робим функціонал на кнопку вийти 
    const {isAuth, setIsAuth} =useContext(AuthContext) //тут знову використаєм хук useContext
    const logout = () => { // в момент коли користувач буде виходити із програми (коли нажимає на кнопку вийти) нам необхідно запис із localStorage видаляти 
      setIsAuth(false) //тут будем сетить стан 
      localStorage.removeItem('auth') // тут будем видаляти по ключу 'auth' запис із localStorage
    }
    return (
        <div className="navbar">
          <MyButton onClick={logout}> {/*тут вставим onClick який буде при нажатті змінювати стан із auth на false*/}
            Вийти
          </MyButton>
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