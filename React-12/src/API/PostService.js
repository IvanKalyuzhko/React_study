import axios from "axios"

export default class PostService {//тут створюєм клас який по default експортуєм
    //тут створюєм статичну асинхронну функцію яка буде повертати список постів
    static async getAll (Limit=10,page=1){ //тут функція буде приймати ліміт і номер сторінки за замовченням для того щоб сервер дав інформацію по них
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            //ми можем другим параметром функцією axios.get передати ще запрос де вказуєм поле params і передаєм туди необхідні значення 
            params:{ //тут передаєм параметри запросом на сервер (Limit=10,page=1)
                _Limit:Limit,
                _page:page
            }
        })
        return response // тут повертаєм список постів
    }
}

//https://jsonplaceholder.typicode.com/posts - посилання на сервер постів 
//Щоб надати потрібні нам умови на сервері ми просто прописуєм у посиланні що нам необхідно
//https://jsonplaceholder.typicode.com/posts?_limit=10 - тут до посилання пишем умову щоб сервер надав нам 10 постів
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2 - тут через знак амперсанта(&) додаєм ще одну умову "Номер сторінки"