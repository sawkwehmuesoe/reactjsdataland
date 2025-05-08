// import React,{useState} from "react"

// const DivSeventeen = ()=>{

//     const defaultselectvalue = "Choose A Country";

//     const init = {
//         firstname:'',
//         lastname:'',
//         country:'',
//         bio:'',
//         gender:'',
//         agree:false
//     }

//     const loaddatas = {
//         firstname:'Kyaw Kyaw',
//         lastname:'Aung',
//         country:'mm',
//         bio:'Thankful',
//         gender:0,
//         agree:true
//     }

//     const [formState,setFormState] = useState(init);


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

    // const clickLoadHandler = ()=>{
    //     setFormState(loaddatas)
    // }

//     const submitHandler = (e)=>{
//         console.log(formState);

//         e.preventDefault();
//     }

//     const clickHandler = ()=>{
//         setFormState(init)
//     }

//     return (
//         <form action="" method=""  onSubmit={submitHandler}>

//             <div>
//                 <label htmlFor="firstname">First Name</label>
//                 <input type="text" name="firstname" id="firstname" onChange={changeHandler} value={formState.firstname} />
//                 <span>{formState.firstname}</span>
//             </div>

//             <div>
//                 <label htmlFor="lastname">Last Name</label>
//                 <input type="text" name="lastname" id="lastname" onChange={changeHandler} value={formState.lastname}/>
//                 <span>{formState.lastname}</span>
//             </div>

//             <div>
//                 <label htmlFor="country">Country</label>
//                 <select name="country" id="country" onChange={changeHandler} value={formState.country}>
//                     <option disabled>{defaultselectvalue}</option>
//                     <option value="mm">Myanmar</option>
//                     <option value="th">Thai</option>
//                     <option value="indo">Indonesia</option>
//                 </select>
//                 <span>{formState.country}</span>
//             </div>

//             <div>
//                 <label htmlFor="bio">Bio</label>
//                 <textarea name="bio" id="bio" onChange={changeHandler} value={formState.bio}></textarea>
//                 <span>{formState.bio}</span>
//             </div>

//             <div>
//                 <label>Gender</label>
//                 <input type="radio" name="gender" id="genderm" onChange={changeHandler} value="1" checked={formState.gender === 1} /><label htmlFor="genderm">Male</label>
//                 <input type="radio" name="gender" id="genderf" onChange={changeHandler} value="0" checked={formState.gender === 0}/><label htmlFor="genderf">Female</label>            
//             </div>

            // <div>
            //     <label htmlFor="agree">Agree</label>
            //     <input type="checkbox" name="agree" id="agree" onChange={changeHandler} value="1"  checked={formState.agree}/>
            // </div>

//             <button type="button" onClick={clickHandler}>Clear</button>
//             <button type="button" onClick={clickLoadHandler}>Load</button>
//             <button type="submit">Save</button>

//         </form>
//     )

// }

// export default DivSeventeen;



import React from "react"

class DivSeventeen extends React.Component{

    constructor(){
        super();
        this.state = {
            firstname:'',
            lastname:'',
            country:'',
            bio:'',
            gender:'',
            agree:false
        }
    }

    render(){

        const inits = {
            firstname:'',
            lastname:'',
            country:'',
            bio:'',
            gender:'',
            agree:true
        }

        const loaddatas = {
            firstname:'Su Myat',
            lastname:'Kyaw',
            country:'th',
            bio:'Thankful',
            gender:'0',
            agree:true
        }

        const defaultselectvalue = "Choose A Country";
    
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

        const clickHandler = ()=>{
            this.setState(inits)
        }

        const clickLoadHandler = ()=>{
            this.setState(loaddatas)
        }

        const submitHandler = (e)=>{
            console.log(this.state);

            e.preventDefault();
        }


        return (
            <form action="" method="" onSubmit={submitHandler}>
    
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" onChange={changeHandler} value={this.state.firstname} />
                    <span>{this.state.firstname}</span>
                </div>
    
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" onChange={changeHandler}  value={this.state.lastname} />
                    <span>{this.state.lastname}</span>
                </div>
    
                <div>
                <label htmlFor="country">Country</label>
                <select name="country" id="country" onChange={changeHandler} value={this.state.country}>
                    <option disabled>{defaultselectvalue}</option>
                    <option value="mm">Myanmar</option>
                    <option value="th">Thai</option>
                    <option value="indo">Indonesia</option>
                </select>
                <span>{this.state.country}</span>
            </div>

            <div>
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" id="bio" onChange={changeHandler} value={this.state.bio}></textarea>
                <span>{this.state.bio}</span>
            </div>

               <div>
                <label>Gender</label>
                <input type="radio" name="gender" id="genderm" onChange={changeHandler} value="1" checked={this.state.gender === "1"} /><label htmlFor="genderm">Male</label>
                <input type="radio" name="gender" id="genderf" onChange={changeHandler} value="0" checked={this.state.gender === "0"}/><label htmlFor="genderf">Female</label>            
            </div>

            <div>
                <label htmlFor="agree">Agree</label>
                <input type="checkbox" name="agree" id="agree" onChange={changeHandler} value="1"  checked={this.state.agree}/>
            </div>
    
            <button type="button" onClick={clickHandler}>Clear</button>
            <button type="button" onClick={clickLoadHandler}>Load</button>
            <button type="submit">Save</button>
    
            </form>
        )

    }

}

export default DivSeventeen;