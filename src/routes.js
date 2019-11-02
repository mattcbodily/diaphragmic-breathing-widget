import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Breathe from './Components/Breathe';

export default (
    <Switch>
        <Route exact path = '/' component={Landing}/>
        <Route path = '/breathe' component={Breathe}/>
    </Switch>
)