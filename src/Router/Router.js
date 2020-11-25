import { Route, Switch } from 'react-router-dom';

import Home from '../Layout/Home/Component'
import Question1 from '../Layout/Question1/Component'
import Question2 from '../Layout/Question2/Component'
import React from 'react';

export default function Router() {
    const question1 = Question1; 
    const question2 = Question2; 
    const home = Home;
    return (
        <Switch>
            <Route path="/" exact={true} component={home}/>
            <Route path="/question-1" exact={true} component={question1}/>
            <Route path="/question-2" exact={true} component={question2}/>
        </Switch>
    )
}
