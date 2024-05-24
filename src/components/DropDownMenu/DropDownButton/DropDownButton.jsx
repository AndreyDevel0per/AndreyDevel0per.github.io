import {FaChevronDown, FaChevronUp} from "react-icons/fa"
import './DropDownButton.css'
import { forwardRef } from "react"

const DropDownButton = forwardRef((props, ref) => {
    const {children, open, toggle} = props
    return (
        <div ref={ref} onClick = {toggle} className={`dropDownMenu__button ${open ? "button_open" : null}`}>
            {children}
            <span>
                {open ? <FaChevronUp/> : <FaChevronDown/>}
            </span>
        </div>
    )
})

export default DropDownButton