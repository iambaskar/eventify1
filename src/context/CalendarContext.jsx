import React, { createContext, useState } from 'react'
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

const CalendarContext = createContext();

const CalendarContextProvider = ({ children }) => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [currentWeek, setCurrentWeek] = useState(dayjs().startOf('day'));
    const [currentWorkWeek, setWorkWeekView] = useState(dayjs());
    const initialEvents = [
        {
            id: 1,
            title: 'Meeting with Bob',
            desc: 'this is the first',
            start: dayjs('2024-08-22T09:00:00'),
            end: dayjs('2024-08-22T10:00:00'),
            isFullDay: false,
            color: 'rgba(3, 155, 230, 1)'
        },
        {
            id: 2,
            title: 'Client call',
            desc: 'The client call',
            start: dayjs('2024-08-28T12:00:00'),
            end: dayjs('2024-08-28T18:00:00'),
            isFullDay: false,
            color: 'rgba(236, 119, 63, 1)',
        },
        {
            id: 3,
            title: 'Workshop',
            des: 'Workshop',
            start: dayjs('2024-08-15'),
            end: dayjs('2024-08-15'),
            isFullDay: true,
            color: 'rgba(216, 26, 96, 1)',
        }
    ];
    const [events, setEvents] = useState(initialEvents);
    
    // users
    const [users, setUsers] = useState([
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCcDot1hx7NZRzZL-MlqJAWIJgJ38DyyLJA&s',
            name: 'Homalander',
            isSelected: false,
        },
        {
            id: 2,
            img: 'https://gizmodo.com.au/wp-content/uploads/2022/03/02/the-batman-review.jpg?quality=75&w=640&h=360&crop=1',
            name: 'Batman',
            isSelected: false,
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCcDot1hx7NZRzZL-MlqJAWIJgJ38DyyLJA&s',
            name: 'Homalander',
            isSelected: false,
        },
        {
            id: 4,
            img: 'https://gizmodo.com.au/wp-content/uploads/2022/03/02/the-batman-review.jpg?quality=75&w=640&h=360&crop=1',
            name: 'Batman',
            isSelected: false,
        },
    ]
    )

    return (
        <CalendarContext.Provider
            value={{
                currentDate,
                setCurrentDate,
                currentWeek,
                setCurrentWeek,
                currentWorkWeek,
                setWorkWeekView,
                events,
                setEvents,
                users,
                setUsers,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};

export { CalendarContext, CalendarContextProvider };

