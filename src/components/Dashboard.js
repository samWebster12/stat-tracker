import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DashboardItems from './DashboardItems';
import DashboardFilters from './DashboardFilters';


const Dashboard = (props) => (
    <div className="dashboard">
        <button className="dashboard__button btn">
            <NavLink to="/add" exact={true} className="dashboard__button-link">Add Player</NavLink>
        </button>
        <DashboardFilters />
        <DashboardItems />
    </div>
);


export default connect()(Dashboard);