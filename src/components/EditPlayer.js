import React from 'react';
import PlayerForm from './PlayerForm';
import { connect } from 'react-redux';
import { editPlayer } from '../actions/playerActions';


class EditPlayer extends React.Component {
    
    onSubmitFunc = (updatedPlayer) => {
        this.props.dispatch(editPlayer(this.props.match.params.id, updatedPlayer));
        this.props.history.push('/');
    }   
    
    render() {
        return (
            <div className="edit-player center-form">
                <h1 className="edit-player__header">Edit Player</h1>
                <PlayerForm player={this.props.player} onSubmit={this.onSubmitFunc}/>
            </div>
        )
    }
} 


const mapStateToProps = (state, ownProps) => {
    return {
        player: state.players.find((player) => player.id === ownProps.match.params.id)
    }
}

export default connect(mapStateToProps)(EditPlayer);