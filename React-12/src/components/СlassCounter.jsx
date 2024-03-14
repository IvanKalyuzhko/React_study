import React from 'react'
//Компонент створюємо за допомогою class
class ClassCounter extends React.Component /*у class хуки використовувати неможна */{
//Назва класу являється назвою компоненту 
//Класові компоненти працюють по іншому - необхідно реалізувати функцію render ,яка повертатиме JSX

    constructor(props){ //constructor параметрами приймає props
        super(props)
        this.state = { // тут ми ініціюєм стан 
            count:0 //тут ми створили поле count - це і є наш лічильник
        }
        this.Increment = this.Increment.bind(this)//тут ми заертаємось до фунції і визиваєм bind і передаєм туди this
        this.Decrement = this.Decrement.bind(this)//тут ми заертаємось до фунції і визиваєм bind і передаєм туди this
    }
//так як працюєм в середині class то функцію не прописуєм
    Increment(){
        this.setState({count:this.state.count +1})//щоб змінити стан прописуєм функцію setState
      }
    Decrement(){
        this.setState({count:this.state.count -1})//щоб змінити стан прописуєм функцію setState
      }
//так як працюєм в середині class , для того щоб звернутися до властивостей необхідно використати this
    render(){
        return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.Increment}>Increment(збільшуєм)</button><br/>
            <button onClick={this.Decrement}>Decrement(зменшуєм)</button>
        </div>
        )
    
    }
}

export default ClassCounter; //використовуєм для того щоб код був видний для Реакту