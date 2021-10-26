import React from 'react';
import SideBar from './sidebar';
import { Switch, Route } from 'react-router-dom';
import Users from './users';
import Posts from './posts';

const Dashboard = () => {

    return ( <div>
        <h1>Admins Dashboard</h1>
        <SideBar/>
        <Switch>
            <Route path="/admin/users" component={Users}/>
            <Route path="/admin/posts" component={Posts}/>
        </Switch>
        
    </div> );
}
 
export default Dashboard;