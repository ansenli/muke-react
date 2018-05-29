import React from 'react';
import {connect} from 'react-redux';
import { addGUM, removeGUM, addGunAsync} from './index.redux';
//import Chlid from './Chlid';

// const mapStateProps = (state) => {
//     return {
//         num: state
//     }
// }
// const actionCreators = {
//     addGUM,
//     removeGUM,
//     addGunAsync
// }
// App = connect(mapStateProps, actionCreators)(App)
// @connect(mapStateProps, actionCreators)
@connect(
    // 你要state 什么属性放到props里
    (state) => ({
        num: state
    }),
    // 你要什么方法放到 props里，自动dispatch
    {
        addGUM,
        removeGUM,
        addGunAsync
    }
)
class App extends React.Component{
    render() {
        return (
            <div>
                {/* < Chlid 
                num = {this.props.num}
                addGUM={this.props.addGUM}
                removeGUM = {this.props.removeGUM}
                addGunAsync = {this.props.addGunAsync}
                /> */}
                <h1>现在有机枪 {this.props.num}</h1>
                <button onClick ={this.props.addGUM}>申请武器</button>
                <button onClick ={this.props.removeGUM}>上交武器</button>
                <button onClick ={this.props.addGunAsync}>延迟两秒a</button>
            </div>
        )
    }
    
}


export default App 