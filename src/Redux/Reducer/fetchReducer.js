
function fetchReducer(state={data:[]},action){
    switch(action.type){
        case 'fetch':
            return {...state,data:action.payload}
        default:
            return state;
    }
}

export default fetchReducer;