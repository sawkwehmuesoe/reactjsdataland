// import React, { Fragment, useState } from "react"

// const GridEight = () => {

//     const [num,setNum] = useState("");
//     const [result,setResult] = useState(0);

//     function changeHandler(e){
//         const value = e.target.value;
//         setNum(value === "" ? "" :Number(value));
//     }

//     function submitHandler(e){
//         e.preventDefault();
//         setResult(result+num);
//         setNum(""); //clear input value after submission
//     }

//     return (
//         <Fragment>
//             <form onSubmit={submitHandler}>
//                 <input type="number" value={num} onChange={changeHandler} autoFocus />
//                 <input type="submit" value="Add" />
//                 <p>Result is {result}</p>
//             </form>
//         </Fragment>
//     )

// }

// export default GridEight

import React, { Fragment } from "react"

class GridEight extends React.Component {

    constructor(){
        super();
        this.state = {
            num : "",
            result : 0,
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        const value = e.target.value;
        this.setState({num:value === "" ? "" : Number(value)});
    }
    
    submitHandler(e) {
        e.preventDefault();
    
        this.setState((prevState)=>({
            result:prevState.result + Number(prevState.num),
            num: "" //clear input value after submission
        }))
    }

    render() {

        return (
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    <input type="number" value={this.state.num} onChange={this.changeHandler} autoFocus />
                    <input type="submit" value="Add" />
                    <p>Result is {this.state.result}</p>
                </form>
            </Fragment>
        )

    }

}

export default GridEight