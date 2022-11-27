import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import Signup from './Signup'
import { useNavigate, Navigate, Switch } from 'react-router-dom'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  if (!isLoggedIn) {
    return (
      <React.Fragment>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </React.Fragment>
    )
  } else {
    return (
      <div className='app'>
        {isLoggedIn && <Sidebar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>Path not resolved</h1>} />
        </Routes>
      </div>
    )
  }
}

export default App
