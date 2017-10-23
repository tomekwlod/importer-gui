import React from 'react';

const ListItem = ({item, onItemSelect, selectedItem}) => { // `({item})` same as `(props)` plus inside the function `const item = props.item;`
    return (
        <li onClick={() => onItemSelect(item)} className={"list-group-item " + ((selectedItem != null && item._id == selectedItem._id) ? 'active' : '')}>
            <div className="list media">
                <div className="list-heading">
                    {item._id}
                </div>
            </div>
        </li>
    );
};

export default ListItem;