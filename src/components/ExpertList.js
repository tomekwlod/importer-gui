import React from 'react';
import ExpertListItem from './ExpertListItem';

const ExpertList = ({ data, paginator, onItemSelect, selectedItem}) => {
    if (!paginator.total) {
        return <div></div>
    }

    const items = data.map((item) => {
        return (
            <ExpertListItem
                //onItemSelect={onItemSelect}
                //selectedItem={selectedItem}
                key={item.Value} 
                item={item} />
        );
    });

    return (
        <div className="col-md-12">
            <div className="paginator">Results found: {paginator.total}</div>
            <div className="expert-list">
                {items}
            </div>
        </div>
    );
}

export default ExpertList;