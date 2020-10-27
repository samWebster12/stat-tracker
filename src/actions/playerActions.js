import { v4 as uuid } from 'uuid';

const fixPlayerProps = ({ points, rebounds, name, assists, shotsTaken, shotsMade}) => {
    points = parseInt(points); 
    rebounds = parseInt(rebounds); 
    assists = parseInt(assists); 
    shotsTaken = parseInt(shotsTaken); 
    shotsMade = parseInt(shotsMade);

    return {
        points,
        rebounds,
        name, 
        assists,
        shotsTaken,
        shotsMade,
        shotPerc: !shotsTaken || !shotsMade ? undefined : 
        (Math.round((shotsMade / shotsTaken + Number.EPSILON) * 10000) / 100),
    }
}

//store points, rebounds, name, assists,, shots taken(opt), shots made(opt)
const addPlayer = (player) => {
    const fixedPlayer = fixPlayerProps(player);

    return {
        type: 'ADD_PLAYER',
        player: {
            id: uuid(),
            ...fixedPlayer
        }
    }
};

const editPlayer = (id, player) => {
    const fixedPlayer = fixPlayerProps(player);

    return {
        type: 'EDIT_PLAYER',
        playerUpdates: fixedPlayer,
        id
    }
}

const removePlayer = (id) => {
    return {
        type: 'REMOVE_PLAYER',
        id
    }
}

export { addPlayer, editPlayer, removePlayer };
