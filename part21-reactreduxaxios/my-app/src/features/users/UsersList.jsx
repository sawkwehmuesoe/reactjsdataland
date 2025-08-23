import { useEffect } from "react";
import { fetchusers } from "./../../store/usersreducer"
import { useSelector,useDispatch } from 'react-redux';

export default function UserList(){

    const {users} = useSelector((state)=>state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchusers())
        .unwrap()
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.name} , {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )

}