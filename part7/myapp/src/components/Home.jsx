// import React from "react"
// import { Link } from "react-router-dom";

// function Home(){
//     return(

//         <div>
//             <h1>Home</h1>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?</p>

//             <p>Lorem ipsum is linked to <Link to={'/product/1002'}>Joey</Link> dolor sit linked to <Link to={'/product/1003'}>Su Su</Link> amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?</p>
//         </div>
//     )
// }

// export default Home;

import React, { Component } from "react"
import { Link } from "react-router-dom";

class Home extends Component{

    render(){
        return(

            <div>
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?</p>
    
                <p>Lorem ipsum is linked to <Link to={'/product/1002'}>Joey</Link> dolor sit linked to <Link to={'/product/1003'}>Su Su</Link> amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas illum. Voluptatem repellat dolore placeat ea quae ab nihil iste tempora sequi, ex aperiam! Nostrum explicabo cupiditate ut aliquam laborum?</p>
            </div>
        )
    }
  
}

export default Home;