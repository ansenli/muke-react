import {createStore} from 'redux';
// 1 新建store
// 通过reducer 简历
// 根据老的 state 和action生成新的 state 

function counter(state = 0,action){

    switch (action.type) {
        case '加机关枪':
            
            return state + 1;
        case '减机关枪':
            return state - 1;
        default:
            return 10;
    }
    
}

const store = createStore(counter)

const init = store.getState();

console.log(init)

// 订阅 时候监控改变后就出发 store.subscribe

function listener() {
    const current = store.getState();
    console.log(`现在有机枪 ${current} 把`)
}
store.subscribe(listener);

// 用sotre 下面的dispatch 派发时间
store.dispatch({type: '加机关枪'})
store.dispatch({type: '加机关枪'})
store.dispatch({type: '减机关枪'})
