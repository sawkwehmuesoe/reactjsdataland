import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteuser } from '../../store/usersreducer';

export default function DeleteTodo(){

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteHandler = (e)=>{
        e.preventDefault();

        dispatch(deleteuser(Number(id)))
            .unwrap()
            .then(()=>{
                navigate('/');
            });

    }

    return(
        <div>
            <h3>Are you sure you want to delete this user</h3>
            <button type="button" onClick={deleteHandler}>Yes, Delete</button>
            <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
            
        </div>
    )
}