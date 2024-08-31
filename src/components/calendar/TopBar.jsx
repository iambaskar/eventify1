import React, { useContext, useState } from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/calendar/Topbar.css';
import { CalendarContext } from '../../context/CalendarContext';
export default function TopBar() {
    const location = useLocation();
    const view = location.pathname.split('/')[2];
    const { currentDate, setCurrentDate, currentWeek, setCurrentWeek, currentWorkWeek, setWorkWeekView } = useContext(CalendarContext);
    const [openView, setOpenView] = useState(false);
    const headerText = {
        month: currentDate.format('MMMM YYYY'),
        week: currentWeek.format('MMMM D, YYYY'),
        workweek: currentWorkWeek.format('MMMM D, YYYY'),
    };
    const navigateTo = useNavigate();
    const handleView = (view) => {
        navigateTo(view);
        setOpenView(false);
    };

    const handlePrev = () => {
        if (view === 'month') {
            setCurrentDate(currentDate.subtract(1, 'month'));
        };
        if(view === 'week'){
            setCurrentWeek(currentWeek.subtract(1, 'week'));
        };
        if(view === 'workweek'){
            setWorkWeekView(currentWorkWeek.subtract(1, 'week'));
        };
    };

    const handleNext = () => {
        if (view === 'month') {
            setCurrentDate(currentDate.add(1, 'month'));
        };
        if(view === 'week'){
            setCurrentWeek(currentWeek.add(1, 'week'));
        };
        if(view === 'workweek'){
            setWorkWeekView(currentWorkWeek.add(1, 'week'));
        };
    };

    return (
        <>
            <div className="topbar">
                <div className='topbar-left'>
                    <button className="topbar-todaybtn">Today</button>
                    <GrPrevious onClick={handlePrev} />
                    <GrNext onClick={handleNext} />
                    <p className='topbar-date-txt'>{
                        headerText[view] || currentDate.format('MMMM YYYY')
                    }</p>
                </div>
                <div className="select-view-menu">
                    <p onClick={() => setOpenView(!openView)}>{view}</p>
                    {
                        openView && <ul className="select-view-menu-inner">
                            <li onClick={() => handleView('month')}>Month</li>
                            <li onClick={() => handleView('week')}>Week</li>
                            <li onClick={() => handleView('workweek')}>Work week</li>
                            <li onClick={() => handleView('day')}>Day</li>
                            <li onClick={() => handleView('year')}>Year</li>
                            <li onClick={() => handleView('agenda')}>Agenda</li>
                        </ul>
                    }
                </div>
            </div>
            <Outlet />
        </>

    )
}
