import dayjs from 'dayjs'
import React, { useContext, useState } from 'react'
import '../../styles/calendar/EventCreationForm2.css'
import { CalendarContext } from '../../context/CalendarContext';
import { BsClock } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { BiBell } from 'react-icons/bi';
import { RiAttachment2 } from "react-icons/ri";
import { BsTextParagraph } from "react-icons/bs";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import GuestTemplate from './GuestTemplate';
import { CgClose } from 'react-icons/cg';
export default function EventCreationForm2({ setOpenForm }) {
    const { events, setEvents, users, setUsers } = useContext(CalendarContext);
    const [modalWidth, setModalWidth] = useState(false);
    const [openColors, setOpenColors] = useState(false);
    const [openGuest, setOpenGuest] = useState(false);
    const [input, setInput] = useState({
        title: '',
        desc: '',
        startDate: dayjs().format('YYYY-MM-DD'),
        endDate: dayjs().format('YYYY-MM-DD'),
        startTime: '',
        endTime: '',
        isFullDay: false,
        color: 'rgba(3, 155, 230, 1)',
        location: '',
        mode: 'online',
        notificationType: 'email',
        hour: '1 hour',
        beforeAfter: 'before',
        attachment: null,
    });

    const handleCreateNewEvent = () => {
        const newEvent = {
            id: events.length + 1,
            title: input.title,
            desc: input.desc,
            start: dayjs(`${input.startDate} ${input.startTime}`),
            end: dayjs(`${input.endDate} ${input.endTime}`),
            isFullDay: input.isFullDay,
            color: input.color,
        };

        setEvents([...events, newEvent]);
        setOpenForm(false);
    };


    return (
        <div className="event-creation-form2" style={{
            minWidth: modalWidth ? '70%' : '35%'
        }}>
            <CgClose onClick={() => setOpenForm(false)}/>
            {/* left */}
            <div className="event-creation-form2-left"
                style={{
                    width: modalWidth ? '50%' : '100%'
                }}
            >
                <div className="event-creation-form2-color-title">

                    <div className='event-creation-form2-color-choose-box'
                        style={{
                            backgroundColor: input.color || 'rgba(3, 155, 230, 1)'
                        }}
                        onClick={() => setOpenColors(!openColors)}
                    >
                        {
                            openColors && (
                                <ul className="event-creation-form2-color-choose-box-inner"
                                >
                                    <li style={{
                                        width: '1.3rem',
                                        height: '1.3rem',
                                        borderRadius: '1rem',
                                        backgroundColor: 'rgba(3, 155, 230, 1)'
                                    }} onClick={() => setInput({ ...input, color: 'rgba(3, 155, 230, 1)' })}></li>
                                    <li style={{
                                        width: '1.3rem',
                                        height: '1.3rem',
                                        borderRadius: '1rem',
                                        backgroundColor: 'rgba(236, 119, 63, 1)'
                                    }} onClick={() => setInput({ ...input, color: 'rgba(236, 119, 63, 1)' })}></li>
                                    <li style={{
                                        width: '1.3rem',
                                        height: '1.3rem',
                                        borderRadius: '1rem',
                                        backgroundColor: 'rgba(216, 26, 96, 1)'
                                    }} onClick={() => setInput({ ...input, color: 'rgba(216, 26, 96, 1)' })}></li>
                                    <li style={{
                                        width: '1.3rem',
                                        height: '1.3rem',
                                        borderRadius: '1rem',
                                        backgroundColor: 'rgba(108, 117, 220, 1)'
                                    }} onClick={() => setInput({ ...input, color: 'rgba(108, 117, 220, 1)' })}></li>
                                    <li style={{
                                        width: '1.3rem',
                                        height: '1.3rem',
                                        borderRadius: '1rem',
                                        backgroundColor: 'rgba(0, 128, 128, 1)'
                                    }} onClick={() => setInput({ ...input, color: 'rgba(0, 128, 128, 1)' })}></li>
                                </ul>
                            )
                        }
                    </div>

                    <input
                        className='event-title-box'
                        type="text" placeholder='Event title'
                        value={input.title}
                        onChange={(e) => setInput({ ...input, title: e.target.value })} required />
                </div>

                {/* start date and time */}

                <div className="event-creation-form2-start-all-box">
                    <BsClock />
                    <input type="date"
                        className='custom-date-input'
                        value={input.startDate}
                        onChange={(e) => setInput({ ...input, startDate: e.target.value })}
                        required
                    />
                    {
                        !input.isFullDay && (
                            <input
                                className='custom-time-input'
                                type='time' onChange={(e) => setInput({ ...input, startTime: e.target.value })} />
                        )
                    }
                    <input type="checkbox" /><span>All day</span>
                </div>

                {/* end date and time */}

                <div className="event-creation-form2-start-all-box">
                    <p>To</p>
                    <input
                        className='custom-date-input'
                        type="date" value={input.endDate}
                        onChange={(e) => setInput({ ...input, endDate: e.target.value })}
                        required
                    />
                    {
                        !input.isFullDay && (
                            <input
                                className='custom-time-input'
                                type='time' onChange={(e) => setInput({ ...input, endTime: e.target.value })} />
                        )
                    }
                </div>

                {/* location */}

                <div className="event-creation-form2-start-all-box
                 location
                ">
                    <GrLocation />
                    <input type="text" value={input.location}
                        onChange={(e) => setInput({ ...input, location: e.target.value })}
                        required
                    />
                </div>

                {/* mode */}

                <div className="event-creation-form2-mode">
                    <input type="radio" value='offline'
                        onChange={(e) => setInput({
                            ...input, mode: e.target.value
                        })}
                    /><span>Offline</span>
                    <input type="radio" value='online'
                        onChange={(e) => setInput({
                            ...input, mode: e.target.value
                        })}
                    /><span>Online</span>
                </div>

                {/* notification */}

                <div className="event-creation-form2-start-all-box">
                    <BiBell />
                    <select name="selectNotificationType" id=""
                        defaultValue={input.notificationType}
                        onChange={e => setInput({ ...input, notificationType: e.target.value })}
                    >
                        <option value="email">email</option>
                        <option value="reminder">reminder</option>
                    </select>
                    <select name="selectHour" id=""
                        defaultValue={input.hour}
                        onChange={e => setInput({ ...input, hour: e.target.value })}
                    >
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4 hours">4 hours</option>
                        <option value="5 hours">5 hours</option>
                    </select>
                    <select name="selectBeforeAfter" id=""
                        defaultValue={input.beforeAfter}
                        onChange={e => setInput({ ...input, beforeAfter: e.target.value })}
                    >
                        <option value="before">Before</option>
                        <option value="after">After</option>
                    </select>
                    {
                        !modalWidth ? <IoChevronForwardOutline onClick={() => setModalWidth(true)} /> : <IoChevronBackOutline onClick={() => setModalWidth(false)} />
                    }
                </div>

                {/* document upload */}

                <div className="event-creation-form2-start-all-box">
                    <RiAttachment2 />
                    <input type="file"
                        id='document'
                        onChange={(e) => setInput({ ...input, attachment: e.target.files[0] })}
                        required
                    />
                    <label htmlFor="document" className='document'>
                        {
                            input.attachment == null ? 'Add attachment' :
                                input.attachment.name
                        }
                    </label>
                </div>

                {/* desc */}

                <div className="event-creation-form2-start-all-box">
                    <BsTextParagraph />
                    <textarea type="text" value={input.desc}
                        onChange={(e) => setInput({ ...input, desc: e.target.value })}
                        required
                        rows={5}
                    />
                </div>


                {/* submit */}

                <button className='save-btn' onClick={handleCreateNewEvent}>Save</button>
            </div>

            {/* right */}
            {
                modalWidth && (
                    <div className="event-creation-form2-right"
                        style={{ width: '50%' }}
                    >
                        <div className="event-creation-form2-right-guest-box">
                            <div className="event-creation-form2-right-guest"
                            onClick={() => setOpenGuest(!openGuest)}
                            >Add Guest <MdExpandMore size={22} color='#949494' />
                            </div>
                            {
                                openGuest && (
                                    <div className="event-creation-form2-guests">
                                        {
                                            users.map((data, index) => (
                                                <GuestTemplate
                                                    key={index}
                                                    guestImg={data.img} name={data.name}
                                                    isSelected={data.isSelected}
                                                />

                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>

                    </div>
                )
            }

        </div>
    )
}
