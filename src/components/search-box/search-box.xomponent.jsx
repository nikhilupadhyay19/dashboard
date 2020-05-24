import React from 'react';
import './search-box.styles.scss';

import {Input} from 'reactstrap';

const SearchBox = ({placeholder, searchProductNameHandler}) => {
    return (<Input
        className="input-searchProduct"
        placeholder={placeholder}
        onChange={searchProductNameHandler}/>)
}
export default SearchBox;