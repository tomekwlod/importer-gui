import React from 'react';

const ExpertListItem = ({item, onItemSelect, selectedItem}) => { // `({item})` same as `(props)` plus inside the function `const item = props.item;`
    return (
        <div>
            <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="col-md-10 text-left">{item.Value}</div>
                        <div className="col-md-2 text-right">{item.Count}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertListItem;