import BurgerMenuCloseButton from '../BurgerMenuCloseButton/BurgerMenuCloseButton'
import './BurgerMenuContent.css'
import Img from '../../../img/Img01.webp'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function BurgerMenuContent({children, toggle, menuActive}) {
    const fullName = useSelector((state) => state.token.fullName);

    return (
        <div className= {`burgerMenuContent ${menuActive ? "burgerMenuContent_open" : null}`}>
            <BurgerMenuCloseButton toggle={toggle} isClose={menuActive}/>
            <div className="burgerMenuContent__container">
                <div className="burgerMenuContent__list">
                    {children}
                </div>
                <div className="burgerMenuContent__interesting">
                    <div className="burgerMenuContent__header">
                        <h1>{fullName ? `Hello, ${fullName}!` : "Today's must read"}</h1>
                    </div>
                    <div className="burgerMenuContent__img">
                        <img id="contentImg" src={Img} alt="" />
                        <h2>Name</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}