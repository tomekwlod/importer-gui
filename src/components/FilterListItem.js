import React from 'react';

const FilterListItem = ({onFilterSelect, filter, group, selectedFilters}) => {
    return (
        <li onClick={() => onFilterSelect(group, filter)} className={"list-group-item " + ((selectedFilters && selectedFilters.indexOf(filter.value) >= 0) ? 'active' : '')}>
            <div className="filter-list media">
                <div>
                    <div className="pull-left">{filter.value}</div>
                    <div className="pull-right">{filter.count}</div>
                </div>
            </div>
        </li>
    );
};

export default FilterListItem;