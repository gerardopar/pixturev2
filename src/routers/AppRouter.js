// importing modules
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// importing components
import HomePage from '../components/pages/HomePage/HomePage';
import SearchPage from '../components/pages/SearchPage/SearchPage';

class AppRouter extends Component {
    constructor(props){
        super(props);

    }
    render() {

        let routes = (
            <Switch>   
            <Route path="/" exact={true}
                render={props => (
                    <HomePage {...props}/>
            )}/>
            <Route path="/search/:image" exact={true}
                render={props => (
                    <SearchPage {...props}/>
            )}/>
            </Switch>
        );

        return (
        <BrowserRouter>
            <div>
                {routes}
            </div>
        </BrowserRouter>
        );
    };
};

export default AppRouter;