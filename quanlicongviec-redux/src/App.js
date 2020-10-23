import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

import * as types from './constants/ActionTypes';
import * as actions from './actions/index';
import {connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        isShowForm: false,
        taskEditing: null,
        search: '',
        filter: {
            name: '',
            status: -1
        },
        sort: {
            key:'name',
            value: 1
        }
    };
    this.onGenerateData = this.onGenerateData.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.search = this.search.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.findID = this.findID.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    // this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSort = this.onSort.bind(this);
  }

//   componentWillMount(){     //ham duoc goi sau khi f5, dc goi 1 lan duy nhat
//     if(localStorage && localStorage.getItem('tasks')){
//       let tasks = JSON.parse(localStorage.getItem('tasks'));
//       this.setState({
//         tasks: tasks
//       });
//     }
//   }
  onGenerateData(){
    let tasks = [
      {
        id: this.generateID() ,
        name: 'Trần Đình Trung',
        status: true
      },
      {
        id:this.generateID(),
        name:'Nguyễn Minh Thắng',
        status: false
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }
  rd(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.rd() + this.rd() + '-' + this.rd() + '-' + this.rd() + this.rd() +'-' + this.rd();
  }

  onCloseForm(){
    this.props.onToggleForm();
  }
  closeForm(){
    this.setState({
      isShowForm: false,
      taskEditing:null
    });
  }
  onShowForm=()=>{
    this.setState({
        isShowForm: true
      });
  }
//   onSubmit(data){
//       //neu chua co id => them moi, co id => sua, update
//       console.log(data.id);
//     let {tasks} = this.state;
//     if(data.id === ''){//them moi
//         data.id = this.generateID();
//         tasks.push(data);
//     }else{//update
//         let index = this.findID(data.id);
//         tasks[index] = data;
//     }
    
//     this.setState({
//       tasks: tasks
//     });
//     localStorage.setItem('tasks',JSON.stringify(tasks));
//     this.setState({
//         taskEditing: null
//     });
//     this.closeForm();
//   }
  search(search){
        //let timkiem = search.search;
        //console.log(search);
        this.setState({
            search: search
        });
  }
  findID(id){
    let {tasks} = this.state;
    let result = -1;
    tasks.forEach((task, index)=>{
        if(task.id === id ){
            result = index;
        }
    })
    return result;
  }
  onDelete(id){
      //console.log(id);
      let {tasks} = this.state;
      let index = this.findID(id);
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onUpdate(id){
    this.onShowForm();
      let {tasks} = this.state;
      let index = this.findID(id);
      let task = tasks[index];
      this.setState({
          taskEditing: task
      });
  }
//   onUpdateStatus(id){
//       let {tasks} = this.state;
//       let index = this.findID(id);
//       tasks[index].status = !tasks[index].status;
//       this.setState({
//           tasks: tasks
//       });
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
  onFilter(filterName, filterStatus){
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
        filter:{
            name: filterName,
            status: filterStatus
        }
    });
  }
  onSort(key, value){
      //console.log(key,':',typeof value);
      this.setState({
          sort:{
              key: key,
              value: value
          }
      })
  }

  render(){
    let {tasks,  taskEditing, search, filter, sort} = this.state ;
    let {isDisplayForm} = this.props
    let elmCloseForm = this.props.isDisplayForm ? 
                            <TaskForm 
                                    onSubmit={this.onSubmit}
                                    task={taskEditing}
                            /> : '' ;
    if(search){
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
    }
    if(filter){
        if(filter.name){
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
            })
        }
        tasks = tasks.filter((task)=>{
            if(filter.status === -1){
                return task;
            }
            return task.status === (filter.status === 1 ? true : false);
        })
    }
    return (
      <div className="App">
        <div className="container padding">
          <div className="header ">
            <h2 className="my-5 text-center">Quản lí công việc</h2>
            <hr />
          </div>
          <div className="row welcome">
            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
              {/* form (TaskForm)*/}
              {elmCloseForm}
            </div>
            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button className="btn btn-primary" onClick={this.onCloseForm}>Thêm công việc</button>
              <button className="btn btn-primary ml-3" onClick={this.onGenerateData}>GenerateData</button>
              {/* search-sort (Control) */}
              <Control 
                search={this.search}
                onSort={this.onSort}
                />
              {/* list (TaskList) */}
              <TaskList  
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter}
                sort={sort}
                />
            </div>
          </div>
        </div>
    
      </div>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm
    }
};
let mapDispatchToProps = (dispatch, props)=>{
    return {
        onToggleForm: ()=>{
            dispatch(actions.onToggleForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
