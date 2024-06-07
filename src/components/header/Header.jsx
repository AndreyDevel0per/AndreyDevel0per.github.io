import './header.css'
import searchImg from '../../img/icons/search.svg'
import headerImg from '../../img/headerImg2.jpg'
import Burger from '../BurgerMenu/Burger/Burger'
import BurgerMenuItem from '../BurgerMenu/BurgerMenuItem/BurgerMenuItem'
import { useState } from 'react'

function Header () {
    const [menuActive, setMenuActive] = useState(false)
    
    const toggleMenu = () => {
        setMenuActive((menuActive) => !menuActive)
    }

    const items = [2, 4, 6, 8]

    const itemsObj = [
        {
            header: 'Home',
            link: ''
        },
        {
            header: 'Log in',
            link: 'login'
        },
        {
            header: 'Information',
            link: 'information'
        },
    ]

    return (
        <header className='header'>
            <div className="header__row">
                <div className="header__menu">
                    {/* <img src={menuImg} alt="" /> */}
                    <Burger menuActive={menuActive} toggleMenu={toggleMenu} content ={
                        <>
                            {
                                itemsObj.map(item => <BurgerMenuItem key={item.header} link={item.link} toggleMenu={toggleMenu}>{`${item.header}`}</BurgerMenuItem>)
                            }
                        </>
                    }/>
                </div>
                <div className="header__logo">
                    logo
                </div>
                <div className="header__search">
                    <img src={searchImg} alt="" />
                </div>
            </div>
            {/* <div className="header__img">
                <img src={headerImg} alt="" />
            </div> */}
        </header>
    )
}

export default Header;