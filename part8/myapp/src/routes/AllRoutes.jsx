import React from "react"
import { Routes, Route, Link, Navigate } from 'react-router-dom'

import { Home,Contact,About,NewsLetter,Donate,PageNotFound } from '.././pages/index.js'
import { Product,ProductList,ProductDetail } from '.././pages/index.js'
import { Language,LanguageEn,LanguageTh,LanguageSri,LanguageNone } from '.././pages/index.js'

// Default Export  

const AllRoutes = ({member}) => {

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* Dynamic Routing and Route Single Parameter */}
            <Route path="/product/:id" element={<Product />} />

            {/* Navigation */}
            <Route path="newsletter" element={<NewsLetter />} />
            {/* <Route path="donate" element={<Navigate to="/home/"/>} /> */}
            <Route path="donate" element={member ? <Donate /> : <Navigate to="/home/" />} />

            {/* Dynamic Routing and Route Multi Parameter */}
            <Route path="/product/:name/:id" element={<ProductDetail />} />
            <Route path="/product" element={<ProductList />} />

            <Route path="*" element={<PageNotFound title="404 Not Found" />} />


            {/* <Route path="/language" element={<Language />}/>
            <Route path="/language/en" element={<LanguageEn />} />
            <Route path="/language/th" element={<LanguageTh />} />
            <Route path="/language/sri" element={<LanguageSri />} /> */}


            {/* Nested Routes */}
            <Route path="/language" element={<Language />}>
                <Route path="en" element={<LanguageEn />} />
                <Route path="th" element={<LanguageTh />} />
                <Route path="sri" element={<LanguageSri />} />
                <Route path="*" element={<LanguageNone />} />
            </Route>
        </Routes>
    )

}


export default AllRoutes

// Name Export 

// export const AllRoutes = ({member}) => {

//     return (
//         <Routes>
//             <Route path="/home" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />

//             {/* Dynamic Routing and Route Single Parameter */}
//             <Route path="/product/:id" element={<Product />} />

//             {/* Navigation */}
//             <Route path="newsletter" element={<NewsLetter />} />
//             {/* <Route path="donate" element={<Navigate to="/home/"/>} /> */}
//             <Route path="donate" element={member ? <Donate /> : <Navigate to="/home/" />} />

//             {/* Dynamic Routing and Route Multi Parameter */}
//             <Route path="/product/:name/:id" element={<ProductDetail />} />
//             <Route path="/product" element={<ProductList />} />

//             <Route path="*" element={<PageNotFound title="404 Not Found" />} />


//             {/* <Route path="/language" element={<Language />}/>
//             <Route path="/language/en" element={<LanguageEn />} />
//             <Route path="/language/th" element={<LanguageTh />} />
//             <Route path="/language/sri" element={<LanguageSri />} /> */}


//             {/* Nested Routes */}
//             <Route path="/language" element={<Language />}>
//                 <Route path="en" element={<LanguageEn />} />
//                 <Route path="th" element={<LanguageTh />} />
//                 <Route path="sri" element={<LanguageSri />} />
//                 <Route path="*" element={<LanguageNone />} />
//             </Route>
//         </Routes>
//     )

// }