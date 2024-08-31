import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import '../../styles/calendar/MonthView.css';
import TopBar from './TopBar';
import { CalendarContext } from '../../context/CalendarContext';
import EventCreationForm from './EventCreationForm';
import EventCreationForm2 from './EventCreationForm2';
import EventCard from './EventCard';
import EventDetailsCard from './EventDetailsCard';
const apiUrl = import.meta.env.VITE_API_URL
const MonthView = () => {
    console.log(apiUrl);
    const initialEvents = [
        {
            id: 1,
            title: 'Meeting with Team',
            date: dayjs('2024-09-10T10:00:00')
        },
        {
            id: 2,
            title: 'Project Deadline',
            date: dayjs('2024-09-15T23:59:59')
        },
        {
            id: 3,
            title: 'Project Deadline',
            date: dayjs('2024-09-15T23:59:59')
        },
        {
            id: 4,
            title: 'Project Deadline',
            date: dayjs('2024-08-15T23:59:59')
        }
    ];
    const [openForm, setOpenForm] = useState(false);
    const [openEventDetails, setOpenEventDetails] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // const [title, setTitle] = useState('');
    // const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
    // const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
    // const [startTime, setStartTime] = useState();
    // const [endTime, setEndTime] = useState();
    // const [isFullDay, setIsFullDay] = useState(false);
    const { currentDate, setCurrentDate, events, setEvents } = useContext(CalendarContext);
    // const [currentDate, setCurrentDate] = useState(dayjs());
    // const [events, setEvents] = useState(initialEvents);
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');
    const days = [];
    let day = startOfWeek;
    while (day <= endOfWeek) {
        days.push(day);
        day = day.add(1, 'day');
    }
    console.log(days);

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };

    const getEventsForDay = (day) => {
        return events.filter((event) => {
            if (event.isFullDay) {
                return day.isSame(event.start, 'day');
            } else {
                return day.isSame(event.start, 'day');
            }
        });
    };

    const weekdayNames = Array.from({ length: 7 }, (_, index) =>
        dayjs().day(index).format('dddd')
    );

    return (
        <>
            {/* <TopBar /> */}
            <div className="month-view">
                {/* <TopBar 
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
            currentDate={currentDate}
            /> */}
                <div className="month-view-weekdays">
                    {weekdayNames.map((weekday, index) => (
                        <div key={index} className="weekday-cell">
                            {weekday}
                        </div>
                    ))}
                </div>
                <div className="month-view-grid">
                    {days.map((dayItem, index) => {
                        const dayEvents = getEventsForDay(dayItem);
                        return (
                            <div key={index} className={`month-view-day-cell ${dayItem.isSame(currentDate, 'month') ? 'current-day' : 'grey-out'}`} onClick={() => setOpenForm(true)}>
                                <div className={`${dayItem.isSame(currentDate, 'month') ? 'day-number' : 'grey-number'}`}>{dayItem.format('D')}</div>
                                {dayEvents.map(event => (
                                    <EventCard key={event.id} title={event.title}
                                        color={event.color}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
            {
                openForm && (
                    // <>
                    //     <div className="form-group">
                    //         <label htmlFor="title">Event Title:</label>
                    //         <input
                    //             type="text"
                    //             id="title"
                    //             value={title}
                    //             onChange={(e) => setTitle(e.target.value)}
                    //             required
                    //         />
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="startDate">Start Date:</label>
                    //         <input
                    //             type="date"
                    //             id="startDate"
                    //             value={startDate}
                    //             onChange={(e) => setStartDate(e.target.value)}
                    //             required
                    //         />
                    //     </div>

                    //     <div className="form-group">
                    //         <label htmlFor="endDate">End Date:</label>
                    //         <input
                    //             type="date"
                    //             id="endDate"
                    //             value={endDate}
                    //             onChange={(e) => setEndDate(e.target.value)}
                    //             required
                    //         />
                    //     </div>

                    //     {!isFullDay && (
                    //         <>
                    //             <div className="form-group">
                    //                 <label htmlFor="startTime">Start Time:</label>
                    //                 <input
                    //                     type="time"
                    //                     id="startTime"
                    //                     value={startTime}
                    //                     onChange={(e) => setStartTime(e.target.value)}
                    //                 />
                    //             </div>

                    //             <div className="form-group">
                    //                 <label htmlFor="endTime">End Time:</label>
                    //                 <input
                    //                     type="time"
                    //                     id="endTime"
                    //                     value={endTime}
                    //                     onChange={(e) => setEndTime(e.target.value)}
                    //                 />
                    //             </div>
                    //         </>
                    //     )}
                    //     <div className="form-group">
                    //         <label htmlFor="isFullDay">Full Day Event:</label>
                    //         <input
                    //             type="checkbox"
                    //             id="isFullDay"
                    //             checked={isFullDay}
                    //             onChange={(e) => setIsFullDay(e.target.checked)}
                    //         />
                    //     </div>
                    //     <button onClick={() => {
                    //         setEvents([...events, {
                    //             id: events.length + 1,
                    //             title: title,
                    //             start: isFullDay ? dayjs(startDate).startOf('day') : dayjs(`${startDate} ${startTime}`),
                    //             end: isFullDay ? dayjs(endDate).endOf('day') : dayjs(`${endDate} ${endTime}`),
                    //             isFullDay: isFullDay,

                    //         }])
                    //     }}>Save Event</button>
                    // </>
                    // <EventCreationForm />
                    <div className="event-creation-form-container"
                    >
                        <EventCreationForm2
                            setOpenForm={setOpenForm}
                        />
                    </div>
                )
            }
        </>
    );
};

export default MonthView;
