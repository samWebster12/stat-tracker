import React from 'react';
import { connect } from 'react-redux';
import DashboardItem from './DashboardItem';
import filterPlayers from '../selectors/filterPlayers';

const DashboardItems = (props) => (
    <div className="dashboard-items">
        <div className="dashboard-items__headers">
            <div className="dashboard-items__headers__name">Player</div>
            <div>Points</div>
            <div>Rebounds</div>
            <div>Assists</div>
            <div>Shooting Percentage</div>
        </div>
        <div className="dashboard-items__items">
            {props.players.map((player) => { 
                return <DashboardItem player={player} key={player.id}/> 
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        players: filterPlayers(state.players, state.filters)
    }
}

export default connect(mapStateToProps)(DashboardItems);