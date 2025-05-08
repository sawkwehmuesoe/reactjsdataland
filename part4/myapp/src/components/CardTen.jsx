// import React,{useState} from "react"

// export default function CardTen(){

//     let counter = 1;

//     const counterarrs = useState(0);

//     // console.log(counterarrs); //[0, ƒ]
//     // console.log(counterarrs[0]); //0
//     // console.log(counterarrs[1]); //function () { [native code] }

//     const counterState = counterarrs[0];
//     const setCounterState = counterarrs[1];
//     // console.log(counterState); //0
//     // console.log(setCounterState);  //function () { [native code] }

//     const handleClick = ()=>{
//         // console.log("i am working");

//         // counter++; 
//         // console.log(counter); //incremented in console, dom ui don't increase ! so we need state

//         setCounterState(counterState + 1);
//     }

//     return (
//         <div>
//             {/* <p>{counter}</p> */}
//             <p>{counterState}</p>
//             <button onClick={handleClick}>Click Now</button>
//         </div>
//     )

// }

import React from "react"


export default class CardTen extends React.Component{


    constructor(){
        super();
        this.state = {
            counter:1
        }
    }

    handleClick = ()=>{
        
        this.state.counter++;
        // console.log(this.state.counter);

        this.setState({
            counter:this.state.counter
        })
    }


    render(){

       

        return(
            <div>
                
                <p>{this.state.counter}</p>
                <button onClick={this.handleClick}>Click Now</button>
            </div>
        )
    }

}