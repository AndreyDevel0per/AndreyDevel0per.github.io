import './BurgerMenuButton.css'
import menuImg from '../../../img/icons/menu-burger.svg'

export default function BurgerMenuButton({toggle, menuActive}) {
    return (
        <button className='burgerMenuButton' onClick={toggle}>
            <img src={menuImg} alt="" />
        </button>
    )
}