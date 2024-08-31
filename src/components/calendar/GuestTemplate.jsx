import React from 'react'
import '../../styles/calendar/GuestTemplate.css'
import { MdOutlineDone } from "react-icons/md";

export default function GuestTemplate({ guestImg, name, isSelected }) {
    return (
        <div className="guest-template">
            {isSelected ? <MdOutlineDone size={18} color='#959595'/> : <MdOutlineDone size={18} color='#fff'/>}
            <img src={guestImg} alt="" />
            <p>{name}</p>
        </div>
    )
}
