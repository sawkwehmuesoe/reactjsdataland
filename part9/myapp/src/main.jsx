import { Fragment,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/mystyle.css'
import App from './App.jsx'
import Banner from './components/Banner.jsx'
import PhotoPost from './components/PhotoPost.jsx'
import AllPosts from './components/AllPosts.jsx'
// import icon1 from "./assets/icons/icon1.png"
// import icon2 from "./assets/icons/icon2.png"
// import icon3 from "./assets/icons/icon3.png"
// import icon4 from "./assets/icons/icon4.png"
// import icon5 from "./assets/icons/icon5.png"
// import icon6 from "./assets/icons/icon6.png"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <Fragment>
    <header>
      <Banner/>
    </header>
    
    <div>
        <h1>Welcome To Our Site</h1>
        <h3>This is my first React Project</h3>

      <AllPosts/>

    </div>
  </Fragment>,
)
