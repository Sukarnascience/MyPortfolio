import React from 'react';
import {BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';

import ContactPG from './Contact';
import HomePG from './HomePG';
import MyPortfolio from './MyPortfolio';
import NavigationBar from './Navigation';
import "./Appstyle.css";

function App(){
    return(
        <BRouter>
            <div>
                <NavigationBar/>
                <Switch>
                    <Route path="/" exact component={HomePG}/>
                    <Route path="/portfolio" exact component={MyPortfolio}/>
                    <Route path="/contact" exact component={ContactPG}/>
                </Switch>
            </div>
        </BRouter>
    )
}

export default App;