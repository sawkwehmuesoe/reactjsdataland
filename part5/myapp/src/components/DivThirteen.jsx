// import React,{useState} from "react"

// const DivThirteen = ()=>{

//     const [formState,setFormState] = useState({
//         firstname:'',
//         lastname:'',
//         city:''
//     });


//     const changeHandler = (e)=>{
        
//         // console.log(e.target);
//         // console.log(e.target.name);
//         // console.log(e.target.id);
//         // console.log(e.target.value);

//         // console.log(formState);

//         setFormState({
//             ...formState,
//             [e.target.name]:e.target.value
//         });

//         console.log(formState);

//     }

//     return (
//         <form action="" method="">

//             <div>
//                 <label htmlFor="firstname">First Name</label>
//                 <input type="text" name="firstname" id="firstname" onChange={changeHandler} />
//                 <span>{formState.firstname}</span>
//             </div>

//             <div>
//                 <label htmlFor="lastname">Last Name</label>
//                 <input type="text" name="lastname" id="lastname" onChange={changeHandler} />
//                 <span>{formState.lastname}</span>
//             </div>

//             <div>
//                 <label htmlFor="city">City</label>
//                 <input type="text" name="city" id="city" onChange={changeHandler} />
//                 <span>{formState.city}</span>
//             </div>


//         </form>
//     )

// }

// export default DivThirteen;



import React from "react"

class DivThirteen extends React.Component{

    constructor(){
        super();
        this.state = {
            firstname:'',
            lastname:'',
            city:''
        }
    }

    render(){
    
        const changeHandler = (e)=>{
            
            // console.log(e.target);
            // console.log(e.target.name);
            // console.log(e.target.id);
            // console.log(e.target.value);

            this.setState({
                [e.target.name] : e.target.value
            });
        
            console.log(this.state);

        }


        return (
            <form action="" method="">
    
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" onChange={changeHandler} />
                    <span>{this.state.firstname}</span>
                </div>
    
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" onChange={changeHandler} />
                    <span>{this.state.lastname}</span>
                </div>
    
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" onChange={changeHandler} />
                    <span>{this.state.city}</span>
                </div>
    
    
            </form>
        )

    }

}

export default DivThirteen;
