import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addPlayer } from './actions/playerActions';
import './styles/normalize.css';
import './styles/styles.scss';

const reduxStore = configureStore();

const jsonPlayers = localStorage.getItem('players');
const players = JSON.parse(jsonPlayers);

if (players) {
    for (let i = 0; i < players.length; i++) {
        reduxStore.dispatch(addPlayer(players[i]));
    }
}


reduxStore.subscribe(() => { 
    const state = reduxStore.getState();
    console.log(state); 

    const jsonPlayers = JSON.stringify(state.players);
    localStorage.setItem('players', jsonPlayers);
});

/*
reduxStore.dispatch(addPlayer({
    name: 'Sam',
    rebounds: 50,
    points: 56,
    assists: 12,
    shotsMade: 50,
    shotsTaken: 90
}));

reduxStore.dispatch(addPlayer({
    name: 'Max',
    rebounds: 12,
    points: 16,
    assists: 13

}));

reduxStore.dispatch(addPlayer({
    name: 'Kyle',
    rebounds: 11,
    points: 22,
    assists: 4

}));

reduxStore.dispatch(addPlayer({
    name: 'Henry',
    rebounds: 23,
    points: 54,
    assists: 2,
    shotsTaken: 50,
    shotsMade: 23
}));

reduxStore.dispatch(addPlayer({
    name: 'Bozo',
    rebounds: 4,
    points: 23,
    assists: 87,
    shotsMade: 32,
    shotsTaken: 54
}));

reduxStore.dispatch(addPlayer({
    name: 'Lucas',
    rebounds: 15,
    points: 2,
    assists: 12,
    shotsMade: 13,
    shotsTaken: 212
}));*/




const jsx = (
    <Provider store={reduxStore}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));