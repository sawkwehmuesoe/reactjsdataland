// import React,{useState} from "react"

// export default function CardEleven(){

//     let counter = 1;

//     const counterarrs = useState(0);

//     let idx = 1;

//     const idxarrs = useState(idx);

//     const idxState = idxarrs[0];
//     const setIdxState = idxarrs[1];

//     const handleClick = ()=>{
//         setIdxState(idxState + 1);
//     }

//     return (
//         <div>         
//             <p>{idxState}</p>
//             <button onClick={handleClick}>Click Now</button>
//         </div>
//     )

// }

// import React from "react"


// export default class CardEleven extends React.Component{


//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         idx:1
//     //     }
//     // }

//     state = {
//         idx:10
//     }

//     handleClick = ()=>{
        
//         this.state.idx++;
//         // console.log(this.state.counter);


//         this.setState({
//             idx:this.state.idx
//         })
//     }


//     render(){

       

//         return(
//             <div>
                
//                 <p>{this.state.idx}</p>
//                 <button onClick={this.handleClick}>Click Now</button>
//             </div>
//         )
//     }

// }

import React from "react"


export default class CardEleven extends React.Component{


    // constructor(){
    //     super();
    //     this.state = {
    //         idx:1
    //     }
    // }

    state = {
        idx:10
    }

    render(){

        
        const handleClick = ()=>{
            
            this.state.idx++;
            // console.log(this.state.counter);


            this.setState({
                idx:this.state.idx
            })
        }

        return(
            <div>
                
                <p>{this.state.idx}</p>
                <button onClick={handleClick}>Click Here</button>
            </div>
        )
    }

}