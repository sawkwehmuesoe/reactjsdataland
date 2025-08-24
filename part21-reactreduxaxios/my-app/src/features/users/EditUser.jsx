import {useState} from "react"

export default function AddUser(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();

        try{
            
        }catch(err){
            console.log("Add user failed : ",err);
        }
    }

    return(
        <div>
            <h3>Add New User</h3>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter Your Name" vlaue={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder="Enter Your Email" vlaue={email} onChange={(e)=>setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}