import { useState } from 'react'

export const useFetching = (callback) =>{
    const[isLoading,setIsLoading] = useState(false)
    const[error, setError] = useState(' ')
    const fetching = async (...args) =>{//щоб аргументи попали у функцію потрібно у fetching прийняти аргументи 
        try {
            setIsLoading(true)
            await callback(...args)//та передати аргументи в callback
        }catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return[fetching,isLoading,error]
}