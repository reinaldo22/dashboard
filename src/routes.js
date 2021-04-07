import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Requisitions from './pages/admin/requisitions';
import Users from './pages/admin/users';
import Painel from './pages/painel';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/admin/dashboard/index';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/admin" exact component={Dashboard}/>
                <Route path="/admin/requisitions" exact component={Requisitions}/>
                <Route path="/admin/users" exact component={Users}/>
                <Route path="/admin/painel" exact component={Painel}/>
            </Switch>
        </BrowserRouter>
    );
}