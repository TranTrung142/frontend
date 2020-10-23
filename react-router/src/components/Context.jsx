import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Context extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
    }
    onClick = (isChecked)=>{
        this.setState({
            isChecked: isChecked
        })
    }
    render() {
        let {isChecked} = this.state;
        return (
            <div className="text-center">
                <h1>Context</h1>
                <button className="btn btn-primary" onClick={()=>this.onClick(false)}>cho phep</button>
                <button className="btn btn-danger" onClick={()=>this.onClick(true)}>khong cho phep</button>
                <Prompt 
                    when={isChecked}
                    message={location => (`Ban cho chac muon chuyen sang trang ${location.pathname}`) }
                />
            </div>
        );
    }
}

export default Context;