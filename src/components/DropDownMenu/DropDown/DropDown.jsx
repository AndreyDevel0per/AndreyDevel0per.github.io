import './DropDown.css'
import DropDownButton from "../DropDownButton/DropDownButton";
import DropDownContent from "../DropDownContent/DropDownContent";
import { useState, useEffect, useRef } from 'react';

export default function DropDown({buttonText, content, open, setOpen}) {
// const [open, setOpen] = useState(false)
const [dropDownTop, setDropDownTop] = useState(0)

const dropDownRef = useRef()
const buttonRef = useRef()
const contentref = useRef()

const toggleDropDown = () => {
  if(!open) {
    const spaceRemaining = window.innerHeight - buttonRef.current.getBoundingClientRect().bottom
    const contentHeight = contentref.current.clientHeight
    const topPosition = spaceRemaining > contentHeight ? null : spaceRemaining - contentHeight
    setDropDownTop(topPosition)
  }

  setOpen((open) => !open)
}

useEffect(() => {
  const handler = (event) => {
    if(dropDownRef.current && !dropDownRef.current.contains(event.target)) setOpen(false)
  }

  document.addEventListener("click",handler)

  return () => {
    document.removeEventListener("click",handler)
  }
}, [dropDownRef])

  return (
    <div className="dropDownMenu" /*ref={dropDownRef}*/>
      <DropDownButton ref={buttonRef} toggle = {toggleDropDown} open = {open}>{buttonText}</DropDownButton>
      <DropDownContent top={dropDownTop} ref={contentref} open={open}>{content}</DropDownContent>
    </div>
  )
}
