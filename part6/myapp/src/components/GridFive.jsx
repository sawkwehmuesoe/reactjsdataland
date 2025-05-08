// import React, { Fragment, useState } from "react"

// const GridFive = () => {

//     const [ison, setIson] = useState(false);

//     const Onmsg = () => (<p>Lighting is ON.</p>);

//     const Offmsg = () => (<p>Lighting already OFF.</p>);

//     const clickHandler = () => {
//         setIson(x => !x)
//     }

//     // method 1 by component
//     // const IsOnOff = ({current})=>{
//     //     if(current){
//     //         return <Onmsg/>
//     //     }else{
//     //         return <Offmsg/>
//     //     }
//     // }

//     // method 2

//     // let message;

//     // if(ison){
//     //     message = <Onmsg/>
//     // }else{
//     //     message = <Offmsg/>
//     // }

//     // method 3

//     // const message = () => {
     
//     //         if (ison) {
//     //             return <Onmsg />
//     //         } else {
//     //             return <Offmsg />
//     //         }
  
//     // }

//     return (
//         <Fragment>
//             <h3>Lighting</h3>

//             {/* <IsOnOff current={ison} /> */}

//             {/* method 2 by variabel */}
//             {/* {message} */}

//             {/* method3 by fuction  */}
//             {/* {message()} */}

//             {/* method4 by ternary operator */}
//             {ison ? <Onmsg/> : <Offmsg/> }

//             <button type="button" onClick={clickHandler}>Switch</button>
//         </Fragment>
//     )

// }

// export default GridFive

import React, { Fragment } from "react"

class GridFive extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            ison : false
        };
        
    }

    clickHandler = () => {
        this.setState((prevState) => ({
            ison : !prevState.ison //Toggle the ison state
        }))
    }

    Onmsg = () => (<p>Lighting is ON.</p>);

    Offmsg = () => (<p>Lighting already OFF.</p>);

    // method 1 
    // IsOnOff = ({current})=>{
    //     return current ? <this.Onmsg/> : <this.Offmsg/>
    // }


    render(){

        const {ison} = this.state;

        // method 2 
        // let message;

        // if(ison){
        //     message = <this.Onmsg/>
        // }else{
        //     message = <this.Offmsg/>
        // }

        // method 3 
        // const message= ()=>{
        //     return ison ? <this.Onmsg/> : <this.Offmsg/>
        // }

        return(
            <Fragment>
                 <h3>Lighting</h3>

                 {/* <this.IsOnOff current={ison} /> */}

                 {/* method 2 by variable  */}
                 {/* {message} */}

                 {/* method 3 by function  */}
                 {/* {message()} */}
                 

                {ison ? <this.Onmsg/> : <this.Offmsg/> }
                <button type="button" onClick={this.clickHandler}>Switch</button>
            </Fragment>
        )

    }

}

export default GridFive

// 10CL


