import React from 'react';
import FilterListItem from './filter_list_item';

const FilterListGroup = (props) => {
    if (props.filter.data == null) {
        return (
            <ul className="list-group">
                <b>{props.filter.name}</b>
                <li className="list-group-item">Empty list</li>
            </ul>
        )
    }
    
    const filterItems = props.filter.data.map((filter) => {
        return (
            <FilterListItem
                key={filter.value} 
                onFilterSelect={props.onFilterSelect}
                filter={filter}
                selectedFilters={props.selectedFilters}
                group={props.filter.name} />
        );
    });

    return (
        <ul className="list-group">
            <b>{props.filter.name}</b>
            {filterItems}
        </ul>
    );
}

export default FilterListGroup;