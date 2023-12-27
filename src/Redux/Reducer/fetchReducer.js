
function fetchReducer(state={data:[],single:{}},action){
    switch(action.type){
        case 'fetch':
            return {...state,data:action.payload}
            case 'single':
                return {...state,single:action.payload}
        default:
            return state;
    }
}

export default fetchReducer;