const initial = {

}

export default (state = initial, action) => {
    const {type, payload} = action;

    let state2=state;
    switch(type){
        case 'SOME_CASE': {
            const {config} = payload;
            state2={
                ...state2, ...config,
            };
        }
        break;
        default:
        break;
    }
    return state2;
}

export const consoleLogger = () => {
    return {
        type: 'SOME_CASE',
        payload: {
            config: {info: "hi"}
        }
    }
}