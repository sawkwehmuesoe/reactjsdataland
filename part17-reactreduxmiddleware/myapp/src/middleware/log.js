const log = (store) => (next) => (action) =>{

    // console.log(store);
    // console.log(next);
    // console.log(action);                 //dispatching
    // console.log(store.getState());       //updated state 

    const result = next(action);

    console.log(store.getState());       //updated state 


    return result;

}

export default log;