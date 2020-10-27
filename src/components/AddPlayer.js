import React from 'react';
import PlayerForm from './playerForm';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions';

const AddPlayer = (props) => (
    <div className="add-player center-form">
        <h1 className="add-player__header">Add Player</h1>
        <PlayerForm onSubmit={(player) => {
            props.dispatch(addPlayer(player));
            props.history.push('/');
        }}/>
    </div>
)

export default connect()(AddPlayer);