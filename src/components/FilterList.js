import React from 'react';
import FilterListGroup from './FilterListGroup';

const FilterList = ({ filters, onFilterSelect, selectedFilters }) => (
    <div className="filters-groups col-md-4">
        {
            filters.map(filter => (
                <FilterListGroup
                    onFilterSelect={onFilterSelect}
                    key={filter.name}
                    selectedFilters={selectedFilters[filter.name]}
                    filter={filter} 
                />
            ))
        }
    </div>
);

export default FilterList;



/*import React from 'react';
import FilterListGroup from './filter_list_group';

const FilterList = (props) => {
    const filterItems = props.filters.map((filter) => {
        return (
            <FilterListGroup
                onFilterSelect={props.onFilterSelect}
                key={filter.name}
                selectedFilters={props.selectedFilters[filter.name]}
                filter={filter} />
        );
    });

    return (
        <div className="filters-groups col-md-4">
            {filterItems}
        </div>
    );
}

export default FilterList;*/