import React from 'react';
import { NavLink } from 'react-router-dom';
import basketballImg from '../assets/basketball.png';

const Header = () => (
    <div className="header">
        <div className="header__logo-container">
            <img src={basketballImg} className="header__logo"/>
        </div>
        <div className="header__title">
            <h1>
                <NavLink to="/" exact={true} className="header__title__text">
                    Basketball Stat Tracker
                </NavLink>
            </h1>
        </div>
    </div>
);

export default Header;

