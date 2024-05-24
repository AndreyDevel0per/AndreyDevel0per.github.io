import './header.css'
import menuImg from '../../img/icons/menu-burger.svg'
import searchImg from '../../img/icons/search.svg'
import headerImg from '../../img/headerImg2.jpg'

function Header () {
    return (
        <header className='header'>
            <div className="header__row">
                <div className="header__menu">
                    <img src={menuImg} alt="" />
                </div>
                <div className="header__logo">
                    logo
                </div>
                <div className="header__search">
                    <img src={searchImg} alt="" />
                </div>
            </div>
            <div className="header__img">
                <img src={headerImg} alt="" />
            </div>
        </header>
    )
}

export default Header;