import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {fetchList, fetchFilters} from '../api'
import AdvancedSearch from './AdvancedSearch'
import List from './List'
import TrialDetail from './TrialDetail'
import PublicationDetail from './PublicationDetail'
import FilterList from './FilterList'

class Home extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            data: [],
            paginator: {},
            filters: [],
            selectedItem: {},
            selectedFilters: [],
            keyword:"",
            drug: "",
            country: "",
            mesh:[""],
            dateTo: "",
            dateFrom: "",
            status: "",
            phase: "",
            journal: "",
        };
    }

    onChangeKeyword = keyword => {
        this.setState({
            keyword: keyword
        });
    }
    onChangeDrug = drug => {
        this.setState({
            drug: drug
        });
    }
    onChangeCountry = country => {
        this.setState({
            country: country
        });
    }
    onChangeFrom = dateFrom => {
        this.setState({
            dateFrom: dateFrom
        });
    }
    onChangeTo = dateTo => {
        this.setState({
            dateTo: dateTo
        });
    }
    onChangeStatus = status => {
        this.setState({
            status: status
        });
    }
    onChangePhase = phase => {
        this.setState({
            phase: phase
        });
    }
    onChangeJournal = journal => {
        this.setState({
            journal: journal
        });
    }
    onMeshTermChange = (key, value) => {
        var mesh = this.state.mesh.concat([]);

        if (key !== null) {
            mesh[key] = value;
        }
        else {
            mesh.push('');
        }
        
        this.setState({
            mesh: mesh
        });
    }

    onSubmit = () => {
        this.setState({
            data: [],
            paginator: {},
            filters: [],
            selectedItem: {},
            selectedFilters: [],
        });

        fetchList(this.state)
            .then(res => {
                const data = res.data ? res.data.map(obj => obj) : [];
                const paginator = res.paginator;

                console.log("list", res)
                
                this.setState({
                    data: data,
                    paginator: paginator,
                    selectedItem: data[0],
                })

                fetchFilters(this.state)
                    .then(res => {
                        const filters = res || [];

                        console.log("filters", res)
                        
                        this.setState({
                            filters: filters
                        }) 
                    });
            });
    }

    onFilterSelect = (group, filter) => {
        var selectedFilters = this.state.selectedFilters

        if (!selectedFilters.hasOwnProperty(group)) {
            selectedFilters[group] = []
        }

        selectedFilters[group].push(filter.value)

        this.setState({
            selectedFilters: selectedFilters
        }) 

        console.log("selectedFilters", this.state.selectedFilters)

        // this.onSubmit()
    }

    render() {
        const item = this.state.selectedItem;

        return (
            <div>
                <AdvancedSearch
                    // mesh={this.state.mesh} 
                    // keyword={this.state.keyword}
                    {...this.state}
                    onChangeKeyword={this.onChangeKeyword}
                    onChangeDrug={this.onChangeDrug}
                    onChangeCountry={this.onChangeCountry}
                    onChangeFrom={this.onChangeFrom}
                    onChangeTo={this.onChangeTo}
                    onChangeStatus={this.onChangeStatus}
                    onChangePhase={this.onChangePhase}
                    onChangeJournal={this.onChangeJournal}
                    onMeshTermChange={this.onMeshTermChange}
                    onSubmit={this.onSubmit}
                    tmpl="home"
                />

                <div className="content">
                    <FilterList 
                        filters={this.state.filters}
                        selectedFilters={this.state.selectedFilters}
                        onFilterSelect={this.onFilterSelect} 
                    />
                    
                    {item && item._type == "trials" ? 
                        <TrialDetail item={item} /> : ""
                    }
                    {item && item._type == "publications" ? 
                        <PublicationDetail item={item} />  : ""
                    }

                    <List 
                        onItemSelect={selectedItem => this.setState({selectedItem})}
                        data={this.state.data} 
                        selectedItem={this.state.selectedItem} 
                        paginator={this.state.paginator} 
                    />
                </div>
            </div>
        );
    }
}

export default Home;