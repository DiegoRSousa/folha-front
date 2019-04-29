import '../common/template/dependencies'
import React from 'react';

import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';
import Footer from '../common/template/footer';

export default porps => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div class='content-wrapper'>
            <h1>Conteúdo</h1>
        </div>
        <Footer />
    </div>
);