import React, { useContext } from 'react';
import MyInput from '../components/UI/Input/MyInput';
import MyButton from '../components/UI/Button/MyButton';
import { AuthContext } from '../context';


const Login = () => {
    
    const{isAuth,setIsAuth} = useContext(AuthContext) // тут ми змінюєм стан isAuth та вставляєм AuthContext
    const login =event=> { //тут створюєм функцію login яка аргументом буде приймати event
        event.preventDefault() // тут робим preventDefault щоб сторінка не оновлювалась 
        setIsAuth(true) // тут визиваєм функцію setIsAuth і змінюєм стан
        localStorage.setItem("auth",'true') // тут в момент авторизації окрім стану будем щось зберігати в  localStorage ( по ключу "auth" будем зберігати рядок 'true')
    }
    return (
        <div>
            <h1>Сторінка для логіна</h1>
            <form onSubmit={login}> {/* тут вставляєм onSubmit і будем визивати функцію login */}
                <MyInput type='text' placeholder='Введіть логін'/>
                <MyInput type='password' placeholder='Введіть пароль'/>
                <MyButton>Увійти</MyButton>
            </form>
        </div>
    );
};

export default Login;