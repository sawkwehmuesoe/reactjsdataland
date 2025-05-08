// import React from "react"


// export default function CardNine(){
    
//     let count = 1;

//     const handleClick = ()=>{
//         // console.log("i am working");

//         count++;
//         console.log(count);
//     }

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={handleClick}>Add Task</button>
//         </div>
//     )

// }


import React from "react"


export default class CardNine extends React.Component{
    
    render(){
        let count = 1;

        const handleClick = ()=>{
            // console.log("i am working");

            count++;
            console.log(count);
        }

        return (
            <div>
                <p>{count}</p>
                <button onClick={handleClick}>Add Task</button>
            </div>
        )
    }

}