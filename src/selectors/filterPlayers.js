
const filterPlayers = (players, filters) => {
    const filteredPlayers = players.filter((player) => {
        const wordInName = player.name.toLowerCase().includes(filters.nameFilter.toLowerCase());
        return wordInName;
    }).sort((a, b) => {
        if (filters.sortBy === 'name') {
            return a.name > b.name ? 1 : -1;

        } else if (filters.sortBy === 'points') {
            return a.points < b.points ? 1 : -1;

        } else if (filters.sortBy === 'rebounds') {
            return a.rebounds < b.rebounds ? 1 : -1;

        } else if (filters.sortBy === 'assists') {
            return a.assists < b.assists ? 1 : -1;

        } else if (filters.sortBy === 'shotPerc') {
            const aShotPerc = !a.shotPerc ? -1 : a.shotPerc;
            const bShotPerc = !b.shotPerc ? -1 : b.shotPerc;

            return aShotPerc < bShotPerc ? 1 : -1;
        }
    });
    return filteredPlayers;
};

export default filterPlayers;