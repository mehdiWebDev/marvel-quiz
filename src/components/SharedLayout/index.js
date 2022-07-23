import React, { Component } from 'react';
import {Link,Outlet } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                 <Outlet />
                <Footer />
                
            </div>
        );
    }
}

export default Index;
