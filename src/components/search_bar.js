import React, {Component} from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term:""}
    }

    render() {
        return (
            <div className="search-bar form-horizontal">
                <div className="col-md-10 form-group">
                    <label className="col-sm-4 control-label">Any keyword:</label>
                    <div className="col-sm-8">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.term}
                            onChange={event => this.onInputChange(event.target.value)} 
                        />
                    </div>
                </div>
                <div className="col-md-2 form-group">
                    <input 
                        className="btn btn-default" 
                        type="button" 
                        value="Search"
                        onClick={event => this.props.onSubmit(this.state.term)} 
                    />
                </div>
            </div>
        );
    }

    onInputChange(term) {
         this.setState({term})
        //  this.props.onSearchTermChange(term)
    }
}

export default SearchBar;