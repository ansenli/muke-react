import React from 'react';
import ReactDom from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {counter,addGUM,removeGUM,addGunAsync} from './index.redux';
const store = createStore(counter,applyMiddleware(thunk))

function render() {
    ReactDom.render(<App store = {store} addGUM ={addGUM} removeGUM = {removeGUM}  addGunAsync ={addGunAsync} />,document.getElementById('root'))
}
render();
store.subscribe(render)