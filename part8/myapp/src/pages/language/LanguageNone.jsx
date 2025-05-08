import React from "react"
import {Outlet} from "react-router-dom"

function LanguageNone(){
    return(

        <div>
            <h1>Sorry We can't provide your language none</h1>

            <Outlet/>
        </div>
    )
}

export default LanguageNone;

// 11RN