import { forwardRef } from 'react'
import './DropDownContent.css'

const DropDownContent = forwardRef((props,ref) => {
    const {children, open} = props
    return (
        <div ref={ref} className={`dropDownMenu__content ${open ? "content_open" : null}`}>
            {children}
        </div>
    )
})

export default DropDownContent