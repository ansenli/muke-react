import React from 'react';

class App extends React.Component{
    // constructor(props) {
    //     super(props)
        
    // }
    render() {
            const store = this.props.store;
            const num = store.getState();
            const addGUM = this.props.addGUM;
            const removeGUM = this.props.removeGUM;
            const addGunAsync = this.props.addGunAsync;
        return (
            <div>
                <h1>现在有机枪 {num}</h1>
                <button onClick ={()=>store.dispatch(addGUM())}>申请武器</button>
                <button onClick ={()=>store.dispatch(removeGUM())}>上交武器</button>
                <button onClick ={()=>store.dispatch(addGunAsync())}>延迟两秒</button>


            </div>
        )
    }
    
}

export default App 