const filtersReducerDefState = {
    nameFilter: '',
    sortBy: 'name'
};

const filtersReducer = ((state = filtersReducerDefState, action) => {
    switch(action.type) {
        case 'NAME_FILTER_CHANGE': {
            return { ...state, nameFilter: action.newNameFilter };
        }

        case 'SORT_BY_CHANGE': {
            return { ...state, sortBy: action.sortByVal };
        }

        default: {
            return state;
        }
    }
});

export default filtersReducer;