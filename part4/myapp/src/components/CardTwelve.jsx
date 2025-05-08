import React,{useState} from "react"

export default function CardTwelve(){

    let idx = 1;

    const [idxState,setIdxState] = useState(idx);

    const handleClick = ()=>{
        setIdxState(idxState + 1);
    }

    return (
        <div>         
            <p>{idxState}</p>
            <button onClick={handleClick}>Click Now</button>
        </div>
    )

}

// 28CT
