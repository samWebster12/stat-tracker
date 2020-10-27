


const playersReducerDefState = [];

const playersReducer = ((state = playersReducerDefState, action) => {
    switch(action.type) {
        case 'ADD_PLAYER': {
            return [...state, action.player];
        }

        case 'EDIT_PLAYER': {
            return state.map((player) => {
                if (player.id === action.id) {
                    return {
                        ...player,
                        ...action.playerUpdates
                    }
                } else {
                    return player;
                }
            });
        }

        case 'REMOVE_PLAYER': {
            return state.filter((player) => {
                return player.id !== action.id;
            })
        }

        default: {
            return state;
        }
    }
});


export default playersReducer;