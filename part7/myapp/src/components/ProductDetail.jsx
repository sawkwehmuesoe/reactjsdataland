import React from "react"
import { useParams } from "react-router-dom";

function ProductShow({ name, id }) {
    console.log("Name = ", name);
    console.log("ID = ", id);

    return (
        <div>
            <h1>Product Detail</h1>

            <p>Dynamic Routing and Route Multi Parameter</p>
            <p>Route passing data Product Name is {name}</p>
            <p>Route passing data Product Id is {id}</p>


        </div>
    )
}

function ProductDetail(props) {

    //node : 'id' should match the route param name 
    const { name, id } = useParams();
    
    return <ProductShow name={name} id={id}  />  
    
}

export default ProductDetail;