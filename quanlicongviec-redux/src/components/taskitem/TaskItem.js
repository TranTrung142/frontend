import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

class TaskItem extends Component{
    onDelete = ()=>{
        this.props.onDelete(this.props.task.id);
    }
    onUpdate = ()=>{
        this.props.onUpdate(this.props.task.id);
    }
    onUpdateStatus = ()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }
    render(){
        let {task, index} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>
                    <button 
                        className="btn btn-danger"
                        onClick={this.onUpdateStatus}
                    >{task.status ? 'active': 'nonactive'} </button>
                </td>
                <td>
                    <button 
                        className="btn btn-primary"
                        onClick={this.onUpdate}
                    >Sửa</button>&nbsp;
                    <button 
                        className="btn btn-primary"
                        onClick={this.onDelete}
                    >Xóa</button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state)=>{
    return {}
};
const mapDispatchToProps = (dispatch, props)=>{
    return {
        onUpdateStatus: (id)=>{
            dispatch(actions.updateStatusTask(id))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);