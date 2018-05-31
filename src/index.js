import React from 'react';
import ReactDom from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

//import App from './App';
// counter 是reducers 所以在provider 组件里面传如的仅仅是定义的规则，而对应的方法达到子组件比如app组件里面根据connect 连接后进行引入使用
// import {counter} from './index.redux';
import reducers from './reducer'
import Auth from'./Auth';
import Dashboard from './Dashboard';
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
    //window.devToosExtension ? window.devToosExtension():f=>f
))

console.log('all store....',store.getState())

// class Test extends React.Component{
//     constructor(props) {
//         super(props);    
//     }
//     render(){
//         console.log(this.props);
//         // this.props.history.push('/')
//         return(
//             <h2> 测试组件{this.props.match.params.location}</h2>
//         )
//     }
// }
// 登录
//     没有登录信息统一跳转到login
// 页面 导航 显示 注销
//     一营
//     二英
//     三英
// router redux
ReactDom.render(
    <Provider store = {store}>
        <BrowserRouter>
       
            <div>
                <Switch>
                    <Route path='/login' exact component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                    {/* <Route path='/sanying' component={Sanying} ></Route>
                    <Route path='/:location' component={Test} ></Route> */}
                </Switch>
               
                {/* Redirect 就是页面渲染时初始路径，每次刷新页面就会跳转到Redirect to 对应 路径 */}
                {/* <Redirect to='/sanying'></Redirect> */}
                {/* switch  只渲染命中的第一个router */}
         
                
            </div>
        </BrowserRouter>
        {/* <Route path='/sanying' component={Sanying} > </Route> */}
    </Provider>
,document.getElementById('root'))

