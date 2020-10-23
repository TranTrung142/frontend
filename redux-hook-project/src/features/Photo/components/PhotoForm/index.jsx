import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
// import {PHOTO_CATEGORY_OPTIONS} from '../../../../constants/global';
// import Images from '../../../../constants/images';

PhotoForm.propTypes = {
    
};

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="insert title"></Input>
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select 
                    id="categoryId"
                    name="categoryId"
                    placeholder="chose category"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>
            <FormGroup>
                <Label for="photoId">Photo</Label>
                <div><Button type="button" outline color="primary">Random image</Button></div><br/>
                <div>
                    <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="anh " />
                </div>
            </FormGroup>
            <FormGroup>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;