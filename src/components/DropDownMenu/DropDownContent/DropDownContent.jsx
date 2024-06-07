import { forwardRef } from 'react'
import './DropDownContent.css'

const DropDownContent = forwardRef((props,ref) => {
    const {children, open, top} = props
    return (
        <div id = 'content' ref={ref} className={`dropDownMenu__content ${open ? "content_open" : null}`} style={{top: top ? `-255px` : "100%"}}>
            {children}
        </div>
    )
})

export default DropDownContent