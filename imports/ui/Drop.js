import React, { Component } from 'react';

export default class Drop extends Component{
    render(){
        return(
            <select name={this.props.name}   onChange={this.props.updateStateProp} >
                <option  > India </option>
                <option> France</option>
                <option> USA </option>
                <option> Australia </option>
            </select>

        );
    }
}