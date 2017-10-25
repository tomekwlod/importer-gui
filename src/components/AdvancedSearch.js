import React, {Component} from 'react'

export default ({
    onChangeKeyword,
    onChangeDrug,
    onChangeCountry,
    onChangeFrom,
    onChangeTo,
    onChangeStatus,
    onChangePhase,
    onChangeJournal,
    onMeshTermChange,
    onSubmit,
    keyword,
    drug,
    country,
    mesh,
    tmpl
}) => (
    <div className="form-horizontal advanced-search">
        <div className="col-md-12">
            <div className="col-md-10 form-group">
                <label className="col-sm-4 control-label">{tmpl == 'experts' ? "Expert name(s)" : "Any keyword"}:</label>
                <div className="col-sm-8">
                    <input
                        className="form-control input-sm"
                        type="text"
                        value={keyword}
                        onChange={e => onChangeKeyword(e.target.value)} 
                    />
                </div>
            </div>
        </div>

        <div className="col-md-12">
            <div className="col-md-10 form-group">
                <label className="col-sm-4 control-label">Country:</label>
                <div className="col-sm-8">
                    <input
                        className="form-control input-sm"
                        type="text"
                        onChange={e => onChangeCountry(e.target.value)} 
                    />
                </div>
            </div>
        </div>

        <div className="col-md-12">
            <div className="col-md-10 pull-right">
                <div className="col-md-5 form-group">
                    <label className="col-sm-4 control-label">From:</label>
                    <div className="col-sm-8">
                        <input
                            className="form-control input-sm"
                            type="text"
                            placeholder="Greated than or equal"
                            onChange={e => onChangeFrom(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="col-md-5 form-group">
                    <label className="col-sm-4 control-label">To:</label>
                    <div className="col-sm-8">
                        <input
                            className="form-control input-sm"
                            type="text"
                            placeholder="Lower than or equal"
                            onChange={e => onChangeTo(e.target.value)} 
                        />
                    </div>
                </div>
                </div>
        </div>

        <div className="col-md-12">
            {
                mesh.map((mt, key) => (
                    <div className="col-md-10 form-group" key={key}>
                        <label className="col-sm-4 control-label">Mesh terms only:</label>
                        <div className="col-sm-8">
                            <input
                                className="form-control input-sm"
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
                    className="btn btn-default btn-sm" 
                    type="button" 
                    value="OR"
                    onClick={() => onMeshTermChange(null, '')} 
                />
            </div>
        </div>

        <div className="col-md-12">
            <div className="col-md-10 form-group">
                <label className="col-sm-4 control-label">Drug:</label>
                <div className="col-sm-8">
                    <input
                        className="form-control input-sm"
                        type="text"
                        onChange={e => onChangeDrug(e.target.value)} 
                    />
                </div>
            </div>
        </div>

         <div className="col-md-12">
            <div className="col-md-10 form-group">
                <label className="col-sm-4 control-label">Status:</label>
                <div className="col-sm-8">
                    <input
                        className="form-control input-sm"
                        type="text"
                        onChange={e => onChangeStatus(e.target.value)} 
                    />
                </div>
            </div>
        </div>

         <div className="col-md-12">
            <div className="col-md-10 form-group">
                <label className="col-sm-4 control-label">Phase:</label>
                <div className="col-sm-8">
                    <input
                        className="form-control input-sm"
                        type="text"
                        onChange={e => onChangePhase(e.target.value)} 
                    />
                </div>
            </div>
        </div>

         <div className="col-md-12">
            <div className="col-md-10 form-group">
                <label className="col-sm-4 control-label">Journal:</label>
                <div className="col-sm-8">
                    <input
                        className="form-control input-sm"
                        type="text"
                        onChange={e => onChangeJournal(e.target.value)} 
                    />
                </div>
            </div>
        </div>

        {/*submit*/}
        <div className="form-group text-right">
            <input 
                className="btn btn-success btn-sm" 
                type="button" 
                value="Proceed"
                onClick={() => onSubmit()} 
            />
        </div>
    </div>
);