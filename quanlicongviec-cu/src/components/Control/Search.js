import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
        
    }
    onSubmit(event){
        event.preventDefault();
        this.props.search(this.state.search);
        this.setState({
            search:''
        })
    }

    render(){
        return(
            <div className="col-6">
                <form className="input-group" onSubmit={this.onSubmit}>
                    
                        <input 
                            className="form-control mr-sm-2" 
                            type="text" 
                            placeholder="Search" 
                            name="search"
                            value={this.state.search}
                            onChange={this.onChange}
                        />
                        <button className="btn btn-success" type="submit">Search</button>
                    
                </form>
            </div>
            
        );
    }
}
export default Search;