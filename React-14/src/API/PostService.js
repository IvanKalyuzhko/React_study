import axios from "axios"

export default class PostService {
    static async getAll (limit=10,page=1){ 
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params:{
                _Limit:limit,
                _page:page
            }
        })
        return response 
    }
    
    //Ця функція повертатиме нам необхідний пост із сервера
    static async getById (id){ 
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id) //тут до посилання на сервер додаєм значення посту вибраного користувачем(id)
        return response 
    }

    //Створюєм функцію що буде отримувати коментарі 
    static async getCommentsByPostId (id){ 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`) 
        return response 
    }
}



