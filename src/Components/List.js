import React, { Component } from 'react';
import PropTypes from 'prop-types';

class list extends Component {
    render() {
        return (
            <div className='list'>
                <h2>listado de selecciones</h2>
                <ul>
                    {this.props.record.map((e, i)=> 
                    <li key={i}>{e}</li>
                    )}
                </ul>
            </div>
        );
    }
}

list.propTypes = {

};

export default list;