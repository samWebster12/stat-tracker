const setNameFilter = (filterText) => ({
    type: 'NAME_FILTER_CHANGE',
    newNameFilter: filterText
});

const setSortBy = (sortByVal) => ({
    type: 'SORT_BY_CHANGE',
    sortByVal
})

export { setNameFilter, setSortBy };
