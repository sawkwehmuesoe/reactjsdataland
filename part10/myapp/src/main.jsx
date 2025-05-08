import { Fragment,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import './index.css'
import './mystyle.css'
import App from './App.jsx'
import Banner from './components/Banner.jsx'
import PhotoPost from './components/PhotoPost.jsx'
import AllPosts from './components/AllPosts.jsx'
import Home from './components/Home.jsx'
import PostDetail from './components/PostDetail.jsx'
// import icon1 from "./assets/icons/icon1.png"
// import icon2 from "./assets/icons/icon2.png"
// import icon3 from "./assets/icons/icon3.png"
// import icon4 from "./assets/icons/icon4.png"
// import icon5 from "./assets/icons/icon5.png"
// import icon6 from "./assets/icons/icon6.png"

createRoot(document.getElementById('root')).render(



  <Fragment>
    <Router>

      <header>
        <Banner/>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
           
          </ul>
        </nav>
      </header>
      
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<AllPosts/>} />
          <Route path='/posts/:posturl' element={<PostDetail/>} />
        </Routes>

        {/* <AllPosts/> */}
        
      </div>
    </Router>
  </Fragment>,
)
