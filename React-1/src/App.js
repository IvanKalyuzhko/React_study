import React, { useState } from 'react'

//Щоб React правильно працював потрібно задавати стан для кожного компоненту щоб React правильно читав змінну
function App() {
  const [likes, setLikes]= useState(0)//useState - повертає масив із 2 обєктів (перше стан(саме значення) , друге функція)
  const [value, setValue]= useState("Текст в інпут") //Стан із текстом 

  function Increment(){
    setLikes(likes+1)
  }
  function Decrement(){
    setLikes(likes-1)
  }
 
  return (
    <div className="App">
      <h1>{likes}</h1>{/*значення стану*/}
      <h1>{value}</h1>{/*значення стану*/}
      <input 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)/*додаєм функцію ,яка відслідковує зміни в input для правильної роботи реакт*/}
        //target - дом елемент 
        //value - значення яке знаходиться в target */
        //Двухстороннє звязування - ми реалізували звязування стану із значенням яке знаходиться в input 
      /><br/>
      <button onClick={Increment}>Increment(збільшуєм)</button><br/>
      <button onClick={Decrement}>Decrement(зменшуєм)</button>
    </div>
    //onClick={Increment} - функцію не визиваєм (не додаєм круглі дужки) , а передаєм як силку
  );
}

export default App;
