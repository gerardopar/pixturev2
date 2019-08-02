// importing modules
import React from 'react';
import {
 BrowserRouter, Route, Switch
} from 'react-router-dom';

// importing components
import HomePage from '../components/pages/HomePage/HomePage';
import SearchPage from '../components/pages/SearchPage/SearchPage';

const AppRouter = () => {
    const routes = (
        <Switch>   
        <Route
          path="/"
          exact
          render={props => (
                <HomePage {...props} />
        )}
        />
        <Route
          path="/search/:image"
          exact
          render={props => (
                <SearchPage {...props} />
        )}
        />
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

export default AppRouter;
