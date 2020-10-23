import React, {Component} from 'react';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name: '',
            status: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount(){
        let {task} = this.props;
        if(task !== null){
            this.setState({
                id:task.id,
                name: task.name,
                status: task.status
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.task){
            this.setState({
                id:nextProps.task.id,
                name:nextProps.task.name,
                status:nextProps.task.status
            })
        }else if (nextProps.task === null){
            this.setState({
                id:'',
                name:'',
                status:false
            })
        }
    }

    closeForm = () => {
        this.props.closeForm();
    }
    onChange(event){
        let name = event.target.name;
        let value = event.target.value;
        if(name === 'status'){
            value = value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    onSubmit(event){
        event.preventDefault();
        //console.log(this.state);
        this.props.onSubmit(this.state);
    }
    render(){
        let {task} = this.props;
        return(
            <div>
                <div className="card text-left">
                    <div className="card-header text-center">
                        <h4>
                        {task !== null ? 'Cập nhật công việc': 'Thêm công việc'}
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                            <label htmlFor="ten"><h5> Name :</h5></label>
                            <input 
                                id="ten"
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                            </div>
                            <label><h5> Status :</h5></label>
                            <select 
                                className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                            <button 
                                type="submit" 
                                className="btn btn-warning"
                                
                            >Thêm</button>&nbsp;
                            <button 
                                type="submit"
                                className="btn btn-danger" 
                                onClick={this.closeForm}
                            >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskForm;
