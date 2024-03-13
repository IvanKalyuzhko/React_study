import axios from "axios"

export default class PostService {//тут створюєм клас який по default експортуєм
    static async getAll (){ //тут створюєм статичну асинхронну функцію яка буде повертати список постів
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

        return response.data // тут повертаєм список постів
    }
}