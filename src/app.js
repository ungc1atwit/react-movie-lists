import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List/List';
import NavbarElement from './containers/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import GlobalFonts from "./fonts/fonts";


const App = () => {
    return (
        <div>
            <div className="header">
                <NavbarElement/>
            </div>
            <div className="container-fluid">
                <List/>
            </div>
        </div>
    );
};
 
ReactDOM.render(
    <BrowserRouter>
        <GlobalFonts/>
        <App/>
    </BrowserRouter>,
document.getElementById('root'));