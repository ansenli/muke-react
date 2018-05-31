const ADD_GUM = 'ADD_GUM';
const REMOVE_GUM = 'REMOVE_GUM';


export function counter(state = 10, action) {
    console.log("indexredux",state)
    switch (action.type) {
        case 'ADD_GUM':
            return state + 1;
        case 'REMOVE_GUM':
            return state - 1;
        default:
            return state;
    }

}

// action creator
export function addGUM() {
    console.log("actions...")
    return { type: ADD_GUM }   
}
export function removeGUM() {
    return { type: REMOVE_GUM }
}

export function addGunAsync() {
    return dispatch =>{
        setTimeout(() => {
            dispatch(addGUM())
        }, 2000);
    }
    
}