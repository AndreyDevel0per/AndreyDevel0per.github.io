import './BurgerMenuCloseButton.css'
import closeButton from '../../../img/icons/close.svg'

export default function BurgerMenuCloseButton({toggle, isClose}) {
    return (
        <button className='burgerMenuCloseButton' onClick={toggle}>
            <img src={closeButton} alt="" />
        </button>
    )
}