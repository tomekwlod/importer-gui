import React, {Component} from 'react'

export default ({
    onChangeKeyword,
    onSubmit,
    onMeshTermChange,
    keyword,
    mesh,
    tmpl
}) => (
    <div className="form-horizontal">
        <div className="search-bar">
            <div className="col-md-10 form-group">
                <label className="col-sm-4 control-label">{tmpl == 'experts' ? "Expert name(s)" : "Any keyword"}:</label>
                <div className="col-sm-8">
                    <input
                        className="form-control"
                        type="text"
                        value={keyword}
                        onChange={e => onChangeKeyword(e.target.value)} 
                    />
                </div>
            </div>
            <div className="col-md-2 form-group">
                <input 
                    className="btn btn-success" 
                    type="button" 
                    value="Search"
                    onClick={() => onSubmit()} 
                />
            </div>
        </div>

        <div className="search-bar">
            {
                mesh.map((mt, key) => (
                    <div className="col-md-10 form-group" key={key}>
                        <label className="col-sm-4 control-label">Mesh terms only:</label>
                        <div className="col-sm-8">
                            <input
                                className="form-control"
                                type="text"
                                value={mesh[key]}
                                onChange={event => onMeshTermChange(key, event.target.value)} 
                            />
                        </div>
                    </div>
                ))
            }
            
            <div className="col-md-2 form-group">
                <input 
                    className="btn btn-default" 
                    type="button" 
                    value="OR"
                    onClick={() => onMeshTermChange(null, '')} 
                />
            </div>
        </div>
    </div>
);