import React, { Component } from 'react';
import {Link , Outlet} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>

                <div className='banner-container'>
                    <h1> <a href='#' ></a> Marvel Quiz</h1>
                </div>
                
            </div>
        );
    }
}

export default Header;
