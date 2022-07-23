import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>

                <div className="footer-container">
                    <p>Project created by Mahdi - 2022</p>
                    <p>Icones</p>
                </div>
                 
            </footer>
        );
    }
}

export default Footer;
