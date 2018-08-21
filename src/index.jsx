import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup/index.jsx';
import Login from './components/Login/index.jsx';
import ForgetPassword from './components/ForgetPassword/index.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Signup} />
                        <Route exact path='/Signup' component={Signup} />
                        <Route exact path='/Login' component={Login} />
                        <Route exact path='/ForgetPassword' component={ForgetPassword} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App