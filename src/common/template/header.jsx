import React from 'react';

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>F</b>olha</span>
            <span className='logo-lg'>
                <i className='fa fa-user'></i>
                <b> Folha</b> Front
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)