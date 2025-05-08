import React from "react"
import { useNavigate } from "react-router-dom";

function NewsLetter(){

    const navigate = useNavigate();

    const clickHandler = ()=>{
        console.log("i am newsletters");
        return navigate('/home');
    }

    return(

        <div>
            <h1>News Letter</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?</p>

            <button type="button" onClick={clickHandler}>Back To Home</button>
        </div>
    )
}

export default NewsLetter;