import React from 'react';
import ListItem from './ListItem';

const List = ({ data, paginator, onItemSelect, selectedItem}) => {
    if (!paginator.total) {
        return <div></div>
    }

    const items = data.map((item) => {
        return (
            <ListItem
                onItemSelect={onItemSelect}
                selectedItem={selectedItem}
                key={item._id} 
                item={item} />
        );
    });

    return (
        <div className="col-md-3">
            <div className="paginator">Results found: {paginator.total}</div>
            <ul className="list-group">
                {items}
            </ul>
        </div>
    );
}

export default List;