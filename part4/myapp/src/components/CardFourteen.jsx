// import React,{useState} from "react"

// const CardFourteen = ()=>{

//     const [firstname,setFirstname] = useState();
//     const [lastname,setLastname] = useState();

//     const firstnameChangeHandler = (e)=>{
//         // console.log("hey");

//         setFirstname(e.target.value);
//     }

//     const lastnameChangeHandler = (e)=>{
//         // console.log("hey");

//         setLastname(e.target.value);
//     }

//     return (

//         <div>

//             <form action="" method="">

//                 <div>
//                     <label htmlFor="firstname">First Name</label>
//                     <input type="text" name="firsname" id="firstname" onChange={firstnameChangeHandler} />
//                     <span>{firstname}</span>
//                 </div>

//                 <div>
//                     <label htmlFor="lastname">Last Name</label>
//                     <input type="text" name="lastname" id="lastname" onChange={lastnameChangeHandler} />
//                     <span>{lastname}</span>
//                 </div>

//             </form>

            

//         </div>

//     )

// }

// export default CardFourteen;


import React,{useState} from "react"

export default class CardFourteen extends React.Component{

    constructor(){
        super();
        this.state = {
            firstname:'',
            lastname:'',
        }
    }  

    render(){

        const firstnameChangeHandler = e =>{
            this.setState({
                firstname:e.target.value
            })
        }
    
        const lastnameChangeHandler = e =>{
            this.setState({
                lastname:e.target.value
            })
        }

        return (

                <div>


                    <form action="" method="">

                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firsname" id="firstname" onChange={firstnameChangeHandler} />
                            <span>{this.state.firstname}</span>
                        </div>

                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" onChange={lastnameChangeHandler} />
                            <span>{this.state.lastname}</span>
                        </div>

                    </form>

                </div>

        )

    }

}



