import React from 'react';
 import { connect } from 'react-redux';
 import {logout} from './Auth.redux'
import { BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

import App from './App';
const Erying = ()=>(
    <h1>Erying.......</h1>
)
const Sanying = ()=>(
    <h1>Sanying.......</h1>
)
@connect(
    state=>state.auth,
    {
        logout
    }
)
class Dashboard extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render(){
        console.log('this...',this.props)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app =(
            <div>
                <h1>牛逼hong</h1>
                {this.props.isAuth ? <button onClick ={this.props.logout} >注销</button>:null }
                <ul>
                    <li>
                        <Link to='/dashboard/'>一应</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/erying'>二迎</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/sanying'>三迎</Link>
                    </li>
                </ul>
                <Route path='/dashboard/' exact component ={App}></Route>
                <Route path='/dashboard/erying' component ={Erying}></Route>
                <Route path='/dashboard/sanying/' component ={Sanying}></Route>
            </div>
        ) 
        //return app
        return this.props.isAuth ?  app : redirectToLogin;
        
    }
    
}

export default Dashboard