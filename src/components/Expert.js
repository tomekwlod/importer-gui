import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {fetchExpertsList} from '../api'
import AdvancedSearch from './AdvancedSearch'
import ExpertList from './ExpertList'

class Expert extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            data: [],
            paginator: {},
            keyword: "",
            drug: "",
            country: "",
            mesh: [""],
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
        fetchExpertsList(this.state)
            .then(res => {
                const data = res.data ? res.data.map(obj => obj) : [];
                const paginator = res.paginator;

                console.log("expertsList", res)
                
                this.setState({
                    data: data,
                    paginator: paginator,
                }) 
            });
    }

    render() {
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
                    tmpl="experts"
                />

                <div className="content">
                    <ExpertList 
                        data={this.state.data}
                        paginator={this.state.paginator} 
                    />
                </div>
            </div>
        );
    }
}

export default Expert;