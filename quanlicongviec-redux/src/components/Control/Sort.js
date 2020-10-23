import React, {Component} from 'react';

class Sort extends Component{
    onSort = (key, value)=>{
        //console.log(key,':',value);
        this.props.onSort(key, value);
    }
    render(){
        return(
            <div className="col-6">
                <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Sắp xếp
                </button>
                <div className="dropdown-menu">
                    <a 
                        className="dropdown-item"
                        onClick={()=>this.onSort("name", 1)}
                    >Tên từ A-Z</a>
                    <a className="dropdown-item" onClick={()=>this.onSort("name", -1)}>Tên từ Z-A</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" onClick={()=>this.onSort("status", 1)}>Kích hoạt</a>
                    <a className="dropdown-item" onClick={()=>this.onSort("status", -1)}>Chưa kích hoạt</a>
                </div>
                </div>
            </div>
        );
    }
}
export default Sort;