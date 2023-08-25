import './Header2.css';
import logo from '../../images/MakeMyTrip-logo-blue.png'
import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHotel, FaTrain } from "react-icons/fa";
import { MyContext } from '../Context/Context';

const Header2= ()=>{
    const myContext = useContext(MyContext);

    return(
        <nav className='header2'>
            <div className='header2-contents'>
                <Link to={'/'}><img className='logo2' src={logo} alt="MakeMyTrip" /></Link>
                <div className='pages-link2'>
                    <NavLink className={`page-link2 ${myContext.intoHome && 'active'}`} to={'/flights'}><GiCommercialAirplane /> Flights</NavLink>
                    <NavLink className={'page-link2'} to={'/hotels'}><FaHotel/> Hotels</NavLink>
                    <NavLink className={'page-link2'} to={'/trains'}><FaTrain/> Trains</NavLink>
                </div>
               
            </div>
        </nav>
    )
}
export default Header2;