import React from "react"
import { useParams } from "react-router-dom";

function Product(){

    //node : 'id' should match the route param name 
    const {id} = useParams();
    console.log(id);
    return(

        <div>
            <h1>Product</h1>
            
            <p>Dynamic Routing and Route Single Parameter</p>
            <p>Route passing data is {id}</p>

            
        </div>
    )
}

export default Product;