import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { applyLoanAsync } from "../actions/actionloan"

function Home(){
    // return <h1>Home</h1>

    const balance = useSelector(state => state.account.balance); //Access State
    const loan = useSelector(state => state.loan.loan); //Access State
    const loading = useSelector(state=>state.loader.loading); //Access Loading State

    const dispatch = useDispatch();
    const loanHandler = ()=>{
        dispatch({type:"APPLY"})
    }

    const loanloadingHandler = ()=>{
        dispatch(applyLoanAsync())
    }

    return (
        <div>
            <h1>Main Balance : {balance}</h1>
            <h3>{loan ? "You already apply loan!" : "Do you want Loan from bank ?" }</h3>
            {/* <button type='button' onClick={()=>loanHandler()} disabled={loan ? true : ""} >{loan ? "Loan Applied" : "Apply Loan" }</button> */}
            
            <button type='button' onClick={()=>loanloadingHandler()} disabled={loan || loading} >{loading ? "Processing..." : loan ? "Loan Applied" : "Apply Loan" }</button>
            
        </div>
    )
}

export default Home;