import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, setSortBy } from '../actions/filterActions';
import searchIcon from '../assets/searchIcon.svg';

class DashboardFilters extends React.Component {

    onNameFilterChange = (e) => {
        this.props.dispatch(setNameFilter(e.target.value));
    }

    onSortByChange = (e) => {
        this.props.dispatch(setSortBy(e.target.value));
    }
//"/assets/searchIcon.svg"
    render(props) {
        return (
            <div className="db-filters">
                <div className="db-filters__search-bar-cover">
                    <input className="db-filters__search-bar" placeholder="Search" type="text" value={this.props.filters.nameFilter} onChange={this.onNameFilterChange} />
                    <img src={searchIcon} alt="search" className="db-filters__search-icon"/>
                </div>
                <div className="db-filters__sort-by">
                    <label htmlFor="sortBy">Sort By: </label>
                    <select className="db-filters__sort-by__drop-down" name="sortBy" id="sortBy" onChange={this.onSortByChange}>
                        <option value="name">Name</option>
                        <option value="points">Points</option>
                        <option value="rebounds">Rebounds</option>
                        <option value="assists">Assists</option>
                        <option value="shotPerc">Shooting %</option>
                    </select>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(DashboardFilters);