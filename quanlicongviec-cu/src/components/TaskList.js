import React, {Component} from 'react';
import TaskItem from './taskitem/TaskItem';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.props.onFilter(
            name === "filterName" ? value : this.state.filterName,
            name === "filterStatus" ? value : this.state.filterStatus 
        )
        this.setState({
            [name]:value
        });
        //this.props.onFilter(this.state.filterName, this.state.filterStatus);
    }

    render(){
        let {tasks, onDelete, onUpdate, onUpdateStatus, sort} = this.props ;
        let {filterName, filterStatus} = this.state;
        if(sort.key === 'name'){
            tasks = tasks.sort((a, b)=>{
                if(a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            })
        }else {
            tasks = tasks.sort((a, b)=>{
                if(a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            })
        }
        
        let elementTask = tasks.map((task,index)=>{
            return <TaskItem 
                        key={task.id}
                        task={task}
                        index={index}  
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        onUpdateStatus={onUpdateStatus}
                    />
        } )
        return(
            <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>
                  <input 
                    type="text"     
                    className="form-control" 
                    name="filterName"
                    value={filterName}
                    onChange={this.onChange}
                    />
                </td>
                <td>
                  <select 
                    className="form-control"
                    name="filterStatus"
                    value={filterStatus}
                    onChange={this.onChange}
                    >
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Chưa Kích hoạt</option>
                    <option value={1}>kích hoạt</option>
                  </select>
                </td>
                <td />
              </tr>
              {/* item (TaskItem) */}
              {elementTask}
            </tbody>
          </table>
        </div>
        );
    }
}
export default (TaskList);