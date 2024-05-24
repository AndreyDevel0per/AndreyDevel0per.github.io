import './DropDown.css'
import DropDownButton from "../DropDownButton/DropDownButton";
import DropDownContent from "../DropDownContent/DropDownContent";
import { useState, useEffect, useRef } from 'react';

export default function DropDown({buttonText, content}) {
const [open, setOpen] = useState(false)

const dropDownRef = useRef()
const buttonRef = useRef()
const contentref = useRef()

const toggleDropDown = () => {
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
      <DropDownContent ref={contentref} open={open}>{content}</DropDownContent>
    </div>
  )
}
