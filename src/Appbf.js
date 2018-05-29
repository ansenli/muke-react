import React from 'react';
import {Button} from 'antd-mobile';
//import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component {
  render(){
    const boss = '李云龙'
    return (
      <div>
        <h2>{boss}</h2>
        <DemoIcon boss={boss} > </DemoIcon>
        <DemoIcon2 boss={boss}></DemoIcon2>
      </div>
    )
  }
}
// 函数式写反
function DemoIcon(props){
  // 这里就用 props.boss  别加速 this
  return (
    <h3>我们的boss 是：{props.boss}</h3>
  )
}

// es6 写法 这个时候要添加 this
class DemoIcon2 extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      solders:['尼玛','地点','我去','你们']
    }

    console.log('组件初始化')
    // 函数使用之前要先通过bind绑定
    // this.addSolder = this.addSolder.bind(this);
    // 后面都用这种写法： <button onClick={()=> this.addSolder()}>新兵</button>
  }
 componentWillMount = () => {
   console.log('组件马上就要挂载了....')
 }
 componentDidMount =()=>{
   console.log('组件已经挂载')
 }

 componentWillReceiveProps(nextProps) {
   console.log('组件要接收父组件的值了...')
 }
 
 shouldComponentUpdate(nextProps, nextState) {
   console.log('判断是否要更新组件....')
   return true
 }
 
 componentWillUpdate(){
   console.log('马上要更新组件了....')
 }
 componentDidUpdate(prevProps, prevState) {
   console.log('组件更新完毕')
 }
 
 componentDidMount(){
   console.log('组件卸载了....')
 }
 

  // 还是用这个最经典，不用绑定this，同时不用再组件中写函数都在外面写，比较简便点
  addSolder = ()=>{
    console.log('hello add solder')
    this.setState({
       solders: [...this.state.solders,'新兵蛋子']
    })
  }
  
 
  
  render(){
    return ( 
    <div>
      <h3> 我们的boss 也是: {this.props.boss} </h3>
      <Button type='primary' onClick={this.addSolder}>新兵</Button>
      <ul>
        {
          this.state.solders.map((item,index ) => {
          return <li key ={index}>{index}{item}</li>
        })}
      </ul>
    </div>
  )
  }
}


export default App