import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler d-lg-none"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="dropdownId">Dropdown</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item">Action 1</a>
                                    <a className="dropdown-item">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;