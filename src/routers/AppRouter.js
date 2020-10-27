import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddPlayer from '../components/AddPlayer';
import EditPlayer from '../components/EditPlayer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/add" component={AddPlayer} exact={true} />     
            <Route path="/edit/:id" component={EditPlayer} exact={true}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
//<Route path="/" component={Dashboard} exact={true} />
//<Route path="/add" component={AddPlayer} exact={true} />
//<Route path="/edit/:id" component={EditPlayer} exact={true}/>