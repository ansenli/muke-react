import React from 'react';

const Chlid = (props)=>{
    // 这个是木偶组件，木偶组件函数式写法就不用添加this，直接props.XXXX
    return (
        <div>
            <h1>现在有机枪 {props.num}</h1>
            <button onClick ={props.addGUM}>申请武器</button>
            <button onClick ={props.removeGUM}>上交武器</button>
            <button onClick ={props.addGunAsync}>延迟两秒a</button>
        </div>
    )
}

export default Chlid