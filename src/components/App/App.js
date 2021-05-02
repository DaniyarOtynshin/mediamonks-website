import React from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Table from '../Table/Table';

function App() {
    return (
        <div className="page__content">
            <Header />
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Table />
            <Footer />
        </div>
    );
}

export default App;
