import React from 'react';
import ReactDom from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
// counter 是reducers 所以在provider 组件里面传如的仅仅是定义的规则，而对应的方法达到子组件比如app组件里面根据connect 连接后进行引入使用
import {counter} from './index.redux';
const store = createStore(counter, composeWithDevTools(
    applyMiddleware(thunk),
    //window.devToosExtension ? window.devToosExtension():f=>f
))


ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>
,document.getElementById('root'))

