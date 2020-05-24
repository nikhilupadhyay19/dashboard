import React from 'react';

import {Input} from 'reactstrap';

const SelectBox = (props) => {
    return (
        <Input
            type="select"
            name="select"
            className="select-ProductRegions"
            onChange={props.selectRegionHandler}>
            {props
                .options
                .map(option => {
                    return (
                        <option value={option.id} key={option.id}>{option.label}</option>
                    )
                })}
        </Input>
    )
}
export default SelectBox;