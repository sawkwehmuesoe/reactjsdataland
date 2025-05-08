// import React, { Fragment,useState,useEffect } from "react"

// const DivTwelve = ()=>{

    // const getinitidx = ()=>{
    //     const saveidx = localStorage.getItem('mynewdb');
    //     return saveidx ? parseInt(saveidx) : 0;
    // }

//     const [idxState,setIdxState] = useState(getinitidx);

//     useEffect(()=>{
//         localStorage.setItem("mynewdb",idxState);
//     },[idxState]);

//     const inclickHandler = ()=>{
//         setIdxState(idxState => idxState+1)   
//     }

//     const decsaveclickHandler = ()=>{
//         setIdxState(idxState => idxState-1)   
//     }

//     const resetclickHandler = ()=>{
//         setIdxState(0);
//         localStorage.clear();   
//     }

//     return(
//         <Fragment>
//             <p>{idxState}</p>
//             <button type="button" onClick={inclickHandler}>Click Me</button>
//             <button type="button" onClick={decsaveclickHandler}>Decrease Me</button>
//             <button type="button" onClick={resetclickHandler}>Reset Me</button>
//         </Fragment>
//     )

// }

// export default DivTwelve;

import React, { Fragment } from "react"

class DivTwelve extends React.Component{
    
    constructor(){
        super();

        const saveidx = localStorage.getItem('mynewdb');

        this.state = {
            idx: saveidx ? parseInt(saveidx) : 0
        }
    }

    // componentDidMount(){
    //     console.log("i am did mount");

    //     const getlocaldb = localStorage.getItem("mydb");

    //     if(getlocaldb !== null){
    //         this.setState({
    //             idx: +getlocaldb
    //         })
    //     }
    // }

    componentDidUpdate(){
        // console.log("i am did update idx = " + this.state.idx);
        localStorage.setItem("mynewdb",this.state.idx);
    }
    
    render(){

        const inclickHandler = ()=>{
            this.setState({
                idx: this.state.idx +1
            }); 
        }
    
        const decsaveclickHandler = ()=>{
            this.setState({
                idx: this.state.idx -1
            }); 
        }
    
        const resetclickHandler = ()=>{
            this.setState({
                idx: 0
            }); 
            localStorage.clear();   
        }
    

        return(
            <Fragment>
                <p>{this.state.idx}</p>
                <button type="button" onClick={inclickHandler}>Increase Click</button>
                <button type="button" onClick={decsaveclickHandler}>Decrease Click</button>
                <button type="button" onClick={resetclickHandler}>Reset Me</button>
            </Fragment>
        )

    }

}

export default DivTwelve;