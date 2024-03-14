import { useMemo } from 'react'
//Створюєм хук в якому прописуєм функцію яка буде приймати параметрами пости (posts) і метод сортування (sort)
export const useSortedPosts = (posts,sort) => {
      const sortedPosts = useMemo(() => {
      if(sort) {
        return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
      }
      return posts 
    },[sort,posts])

    return sortedPosts
}

//Цей хук буде повертати уже відфільтрований і відсортований масив 
//Аргументами він приймає пости пости (posts), метод сортування (sort) і пошуковий рядок (query)
export const usePosts = (posts, sort , query) => {
    const sortedPosts = useSortedPosts(posts , sort) //тут нам треба отримати масив відсортованих постів
    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
      },[query,sortedPosts])

  return sortedAndSearchedPosts //тут ми повертаєм масив відсортованих і відфільтрованих постів
}
