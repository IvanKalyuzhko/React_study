import React, { useState } from 'react'

const Counter = function (){
    const[count,setCount]=useState(0)

    function Increment(){
        setCount(count+1)
      }
      function Decrement(){
        setCount(count-1)
      }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment(збільшуєм)</button><br/>
            <button onClick={Decrement}>Decrement(зменшуєм)</button>
        </div>
    )
}

export default Counter; //використовуєм для того щоб код був видний для Реакту