import React, {Component} from 'react';
import Search from './Control/Search';
import Sort from './Control/Sort';

class Control extends Component{
    // search = (search)=>{
    //     this.props.search(search);
    // }
    render(){
        return(
            <div>
                <div className="row my-2">
                {/* Search */}
                <Search search={this.props.search}/>
                {/* Sort */}
                <Sort onSort={this.props.onSort}/>
                </div>
            </div>
        );
    }
}
export default Control;