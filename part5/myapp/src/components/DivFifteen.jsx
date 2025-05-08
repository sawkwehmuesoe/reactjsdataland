import React,{useState} from "react"

const DivFifteen = ()=>{

    const init = {
        firstname:'',
        lastname:'',
        city:''
    }

    const [formState,setFormState] = useState(init);


    const changeHandler = (e)=>{
        
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.id);
        // console.log(e.target.value);

        // console.log(formState);

        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        });

        console.log(formState);

    }

    const submitHandler = (e)=>{
        console.log(formState);

        e.preventDefault();
    }

    const clickHandler = ()=>{
        setFormState(init)
    }

    return (
        <form action="" method=""  onSubmit={submitHandler}>

            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" onChange={changeHandler} value={formState.firstname} />
                <span>{formState.firstname}</span>
            </div>

            <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" onChange={changeHandler} value={formState.lastname}/>
                <span>{formState.lastname}</span>
            </div>

            <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" onChange={changeHandler} value={formState.city} />
                <span>{formState.city}</span>
            </div>

            <button type="button" onClick={clickHandler}>Clear</button>
            <button type="submit">Save</button>

        </form>
    )

}

export default DivFifteen;



// import React from "react"

// class DivFifteen extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             firstname:'',
//             lastname:'',
//             city:''
//         }
//     }

//     render(){
    
//         const changeHandler = (e)=>{
            
//             // console.log(e.target);
//             // console.log(e.target.name);
//             // console.log(e.target.id);
//             // console.log(e.target.value);

//             this.setState({
//                 [e.target.name] : e.target.value
//             });
        
//             console.log(this.state);

//         }

//         const clickHandler = ()=>{
//             this.setState({
//                 firstname:'',
//                 lastname:'',
//                 city:''
//             })
//         }

//         const submitHandler = (e)=>{
//             console.log(this.state);

//             e.preventDefault();
//         }


//         return (
//             <form action="" method="" onSubmit={submitHandler}>
    
//                 <div>
//                     <label htmlFor="firstname">First Name</label>
//                     <input type="text" name="firstname" id="firstname" onChange={changeHandler} value={this.state.firstname} />
//                     <span>{this.state.firstname}</span>
//                 </div>
    
//                 <div>
//                     <label htmlFor="lastname">Last Name</label>
//                     <input type="text" name="lastname" id="lastname" onChange={changeHandler}  value={this.state.lastname} />
//                     <span>{this.state.lastname}</span>
//                 </div>
    
//                 <div>
//                     <label htmlFor="city">City</label>
//                     <input type="text" name="city" id="city" onChange={changeHandler}  value={this.state.city} />
//                     <span>{this.state.city}</span>
//                 </div>
    
//                 <button type="buttons" onClick={clickHandler}>Clear</button>
//                 <button type="submit">Save</button>
    
//             </form>
//         )

//     }

// }

// export default DivFifteen;