import React from 'react';
import MyInput from '../components/UI/Input/MyInput';
import MyButton from '../components/UI/Button/MyButton';

const Login = () => {
    return (
        <div>
            <h1>Сторінка для логіна</h1>
            <form>
                <MyInput type='text' placeholder='Введіть логін'/>
                <MyInput type='password' placeholder='Введіть пароль'/>
                <MyButton>Увійти</MyButton>
            </form>
        </div>
    );
};

export default Login;