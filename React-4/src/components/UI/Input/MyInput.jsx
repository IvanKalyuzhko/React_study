import React from "react"
import classes from "./MyInput.module.css"

const MyInput = (props) => {
    return (
        <input className={classes.MyInput} {...props /*Розвертаєм props в input*/}/>
    )
}

export default MyInput