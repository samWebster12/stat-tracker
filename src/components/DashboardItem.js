import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePlayer } from '../actions/playerActions';

class DashboardItem extends React.Component {
    onRemoveElementClick = () => {
        this.props.dispatch(removePlayer(this.props.player.id));
        
    }
    
    render() {
        return ( 
            <div className="dashboard-item">
                <p className="dashboard-item__name">{this.props.player.name}</p>
                <p>{this.props.player.points}</p>
                <p>{this.props.player.rebounds}</p>
                <p>{this.props.player.assists}</p>
                <p>{this.props.player.shotPerc ? this.props.player.shotPerc : 'N/A'}%</p>
                <button className="dashboard-item__edit-btn">
                    <Link to={`/edit/${this.props.player.id}`} className="dashboard-item__edit-btn__text">Edit Player</Link>
                </button>
                <button onClick={this.onRemoveElementClick} className="dashboard-item__remove-btn">Remove Player</button>
            </div>
        );
    }
}

export default connect()(DashboardItem);