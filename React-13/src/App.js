import React from "react"
import './styles/App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";


const App = () => {
    return (
      //Щоб зробити роутинг необхідно весь компонент обгорнути в Router
           <Router>
             <Navbar/>{/*тут створюєм навігацію щоб переключати сторінки*/}
             <AppRouter/>{/*тут здійснюєм шлях до сторінок щоб відображити їх */}
           </Router>
    )
}

export default App









