const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export function auth(state={isAuth:false,user:'boss'},action) {
    console.log("authredux",state)
    switch(action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        default:
            return state
    }
}

// action 

export function login() {
    return {type:LOGIN}
}

export function logout() {
    return {type:LOGOUT}
}