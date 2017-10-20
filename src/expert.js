import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchBar from './components/search_bar'
import ExpertList from './components/expert_list'

class Expert extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            data: [],
            // filters: [],
            paginator: {},
            // selectedItem: {},
            // selectedFilters: []
        };
    }

    dataSearch = searchTerm => {
        if (searchTerm && searchTerm.length <= 3) {
            this.setState({
                data: [],
                // filters: [],
                paginator: {},
                // selectedItem: {},
                // selectedFilters: []
            })

            return
        }

        axios
            .post(`http://127.0.0.1:4444/expert/search`, {
                "keyword" : searchTerm,
            })
            .then(res => {
                const data = res.data.data ? res.data.data.map(obj => obj) : [];
                const paginator = res.data.paginator;

                // this.dataFilters(searchTerm)
                console.log(res.data)
                console.log(data)
                this.setState({
                    data: data,
                    paginator: paginator,
                    // selectedItem: data[0]
                }) 
            });
    }

    // dataFilters(searchTerm) {
    //     axios
    //         .post(`http://127.0.0.1:4444/search/filters`, {
    //             "keyword" : searchTerm,
    //             "mesh" : (this.state.selectedFilters['Mesh Terms']) ? this.state.selectedFilters['Mesh Terms'] : [],
    //             "experts" : (this.state.selectedFilters['Experts']) ? this.state.selectedFilters['Experts'] : [],
    //         })
    //         .then(res => {
    //             const filters = res.data || [];
                
    //             this.setState({
    //                 filters: filters
    //             }) 
    //         });
    // }

    // addFilter = (group, filter) => {
    //     var selectedFilters = this.state.selectedFilters

    //     if (!selectedFilters.hasOwnProperty(group)) {
    //         selectedFilters[group] = []
    //     }

    //     selectedFilters[group].push(filter.value)

    //     this.setState({
    //         selectedFilters: selectedFilters
    //     }) 

    //     console.log("selectedFilters", this.state.selectedFilters)

    //     this.dataSearch("");
    // }

    render() {
        // const item = this.state.selectedItem;

        return (
            <div>
                <SearchBar onSubmit={this.dataSearch} />

                <div className="content">
                    <ExpertList 
                        //onItemSelect={selectedItem => this.setState({selectedItem})}
                        data={this.state.data} 
                        //selectedItem={this.state.selectedItem} 
                        paginator={this.state.paginator} 
                    />
                </div>
            </div>
        );
    }
}

export default Expert;