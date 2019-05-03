import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import Trabalhador from '../trabalhador/trabalhador';
import Parametros from '../configuracoes/parametros';

export default props => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/trabalhadores' component={Trabalhador} />
        <Route path='/parametros'component={Parametros} />
        <Redirect from='*' to='/' />
    </Switch>
    </BrowserRouter>
)