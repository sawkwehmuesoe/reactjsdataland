import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router'

import UserList from "./features/users/UsersList"

function App() {
  

  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </Router>
    </section>
  )
}

export default App
