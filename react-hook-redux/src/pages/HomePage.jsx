import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HomeList from '../components/home/HomeList';
import {setActiveHobby} from '../actions/hobby';

HomePage.propTypes = {

};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    const onChangeColor = (hobby)=>{
        let action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div>
            <h4>React redux</h4>
            <ul>
                <h4>list hobby</h4>
                <HomeList
                    hobbyList={hobbyList}
                    onChangeColor={onChangeColor}
                    activeId={activeId}
                />
            </ul>

        </div>
    );
}

export default HomePage;