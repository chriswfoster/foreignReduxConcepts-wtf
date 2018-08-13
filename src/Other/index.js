const initialState = {}

export default(state = initialState, action) => {
    const {payload, type} = action
    const state2 = state;
    switch(type){
        case "SOMETHING_ELSE":
            state= {...state2, payload}
            break;
            default:
            break;
    }
    return state2
}