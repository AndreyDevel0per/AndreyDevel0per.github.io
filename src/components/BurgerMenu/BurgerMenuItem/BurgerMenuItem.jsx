import { Link } from 'react-router-dom'
import './BurgerMenuItem.css'

export default function BurgerMenuItem({children, link, toggleMenu}) {
    return (
        <Link to={`/${link}`} onClick={toggleMenu} className='burgerMenuItem__button'>
            <div className='burgerMenuItem'>
                <div className="burgerMenuItem__header">
                    <span>{children}</span>
                </div>
            </div>
        </Link>
    )
}