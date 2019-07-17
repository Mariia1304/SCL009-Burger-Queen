import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Waiter from './components/Waiter/Waiter';
const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>
            <Route path='/waiter' component = {Waiter} />
        </Switch>
    )
}
export default Routes;