import React from 'react';
import PropTypes from 'prop-types';
import './HomeList.css';

HomePage.propTypes = {
    hobbyList: PropTypes.array,
    onChangeColor: PropTypes.func,
    activeId: PropTypes.number,
};
HomePage.defaultProps = {
    hobbyList: [],
    onChangeColor: null,
    activeId: null
}

function HomePage(props) {
    let {hobbyList, onChangeColor,activeId} = props;
    const onClick = (hobby)=>{
        onChangeColor(hobby);
    }
    return (
        <ul>
            {hobbyList.map((hobby, index)=>{
                return <li 
                        key={index} 
                        className={activeId === hobby.id ? 'active':''}
                        onClick={()=>onClick(hobby)}
                    >{hobby.title} </li>
            })}
        </ul>
    );
}

export default HomePage;