const initialState = {
    task:"Nothing to do"
}

function reducer(state = initialState,action){

    switch(action.type){
        case "READ":
            return {task:"Aung Aung is reading Article"}
        case "WRITE":
            return {task:"Aung Aung is writing Article "}
        default:
            return state;
    }

}

export default reducer