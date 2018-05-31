import React from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom'
import {login } from './Auth.redux';
// 两个reducer ，不同的state 同一个时间点只有一个state，所以要合并reduces
@connect(
    state=>state.auth,
    {
        login
    }
)
class Auth extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render(){
        return (
           <div>
               {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> :null}
                <h2>你没有权限需要登录才能查看</h2>
                <button onClick = {this.props.login}>登录</button>
           </div>
        )
    }
    
}

export default Auth