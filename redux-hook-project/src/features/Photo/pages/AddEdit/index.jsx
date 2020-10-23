import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
// import Banner from '../../../../components/Banner';
// import Images from '../../../../constants/images';
// import PhotoForm from '../../components/PhotoForm';

AddEdit.propTypes = {
    
};

function AddEdit(props) {
    return (
        <div >
            <Banner title="Add edit photo" backgroundUrl={Images.PINK_BG} />
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h2 className="text-center">Add item</h2>
                        <PhotoForm/>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default AddEdit;