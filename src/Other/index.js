const initialState = {}

export default(state = initialState, action) => {
    const {payload, type} = action
    let state2 = state;
    switch(type){
        case "SOMETHING_ELSE":
            state2={...state2, ...payload}
            break;
            default:
            break;
    }
    return state2
}