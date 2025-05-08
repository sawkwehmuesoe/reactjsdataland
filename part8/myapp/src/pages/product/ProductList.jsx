import React from "react"
import { useSearchParams,useLocation } from "react-router-dom";

function ProductList(){

    // for single/multi for each query result 
    const [searchParams] = useSearchParams();
    // console.log(searchParams);
    // console.log(searchParams.get('q'));
    // console.log(searchParams.get('keyword'));
    // console.log(searchParams.get('batch'));
    // console.log(searchParams.get('fee'));

    // for multi concate  search query 
    // const location = useLocation();
    // console.log(location);
    // console.log(location.search);

    return(

        <div>
            <h1>Product List</h1>
            
            <p>Dynamic Routing and Route Query</p>
            <p>Route passing data is </p>

            
        </div>
    )
}

export default ProductList;