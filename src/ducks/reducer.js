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
    time: ''
}

//ACTION TYPES ie consts

//ACTION BUILDERS


//REDUCER
export default (state = initalState, action) => {
    const {type, payload} = action
    switch(type){
        default:
            return state
    }
}