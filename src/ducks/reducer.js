//setting up initalState
const initalState = {
    user_id: '',
    login_name: '',
    email: '',
    phone: '',
    username: '',
    admin_user: false,
    dog_id: '',
    dog_name: '',
    dog_breed: '',
    service_id: '',
    service_name: "",
    service_price: '',
    addon_id: '',
    addon_name: '',
    addon_price: '',
    date: '',
    time: '',
    dog_ids: []
}

//ACTION TYPES ie consts
const SET_USER = 'SET_USER'
const USER_LOGOUT = 'USER_LOGOUT'


//ACTION BUILDERS
export function setUser(user){
    return{
        type: SET_USER,
        payload: user
    }
}
export function userLogout(user){
    return{
        type: USER_LOGOUT,
        payload: user
    }
}

//REDUCER
export default (state = initalState, action) => {
    console.log(action)
    const { type } = action
    switch(type){
        case USER_LOGOUT:
            return initalState
        case SET_USER:
            //getting/destructuring login_name, email, & dog_id off of action.payload
            const { login_name, email, dog_id } = action.payload
            //making copy of state with spread operator
            //then we are reassigning the values of login_name & email 
            //to what comes off of the action.payload
            return{...state, login_name, email, dog_ids: dog_id}
        default:
            return state
    }
}