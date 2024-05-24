import './DropDownItem.css'

export default function DropDownItem({children, onClick}) {
    return (
        <div className="DropDownMenu__item" onClick={onClick}>{children}</div>
    )
}