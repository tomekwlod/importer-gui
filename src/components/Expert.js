import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {fetchExpertsList} from './api'
import AdvancedSearch from './components/AdvancedSearch'
import ExpertList from './components/ExpertList'

class Expert extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            data: [],
            paginator: {},
            keyword:"",
            mesh:[""],
        };
    }

    onChangeKeyword = keyword => {
        this.setState({
            keyword: keyword
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