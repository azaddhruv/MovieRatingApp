import React, { useRef } from 'react'
import './Login.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './store/index'
import { useNavigate, NavLink } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passwordRef = useRef()
  const loginHandler = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      const userData = await axios({
        method: 'post',
        url: '/signin',
        data: {
          email,
          password,
        },
      })
      console.log(userData)
      if (userData.data.status === 'success' && userData.data.accessToken) {
        dispatch(authActions.login({ token: userData.data.accessToken }))
        navigate('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='login'>
      <form className='login__form' onSubmit={loginHandler}>
        <h3 className='login__header'>Login</h3>
        <input
          className='form__element'
          type='text'
          ref={emailRef}
          placeholder='Email'
        />
        <input
          className='form__element'
          type='password'
          ref={passwordRef}
          placeholder='Password'
        />
        <button className='form__button'>Submit</button>
        <p className='form__link'>
          <span>Not a User?</span>{' '}
          <NavLink className='link__text' to='/signup'>
            {' '}
            Register
          </NavLink>
        </p>
      </form>
    </div>
  )
}

export default Login
