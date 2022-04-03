import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Previous extends Component {

    render() {
        return (
            <div className='previus'>
                <h2>Seleccion anterior: {this.props.previous}</h2>
            </div>
        );
    }
}


export default Previous;