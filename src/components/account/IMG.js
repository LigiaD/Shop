import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class IMG extends Component {

    render() {
        const { imgUrl } = this.props;
        return (
            <div className='purchase-img'>
                <img src ={imgUrl}/>
            </div>
        )
    }
}

IMG = connect(null, actions)(IMG);

export default IMG;