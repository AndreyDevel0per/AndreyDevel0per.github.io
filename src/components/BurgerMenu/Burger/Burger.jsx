import BurgerMenuButton from "../BurgerMenuButton/BurgerMenuButton";
import BurgerMenuContent from "../BurgerMenuContent/BurgerMenuContent";
import './Burger.css'
import { useState } from 'react'


export default function Burger({content, menuActive, toggleMenu}) {
    // const [menuActive, setMenuActive] = useState(false)
    const body = document.getElementsByTagName('body')

    // const toggleMenu = () => {
    //     setMenuActive((menuActive) => !menuActive)
    // }

    if(menuActive){
        body[0].style.overflow = 'hidden'
    } else {
        body[0].style.overflow = 'visible'
    }

    return (
        <div className="burger">
            <BurgerMenuButton toggle={toggleMenu} menuActive={menuActive}/>
            <BurgerMenuContent toggle={toggleMenu} menuActive={menuActive}>{content}</BurgerMenuContent>
        </div>
    )
}