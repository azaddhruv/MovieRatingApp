import React, { useRef } from 'react'
import './Signup.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/index'
import axios from 'axios'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()
  const ageRef = useRef()
  const signupHandler = async (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const age = ageRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      const userData = await axios({
        method: 'post',
        url: '/signup',
        data: {
          name,
          age,
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
    <div className='signup'>
      <form onSubmit={signupHandler} className='signup__form'>
        <h3 className='signup__header'>Signup</h3>
        <input
          className='form__element'
          placeholder='Name'
          type='text'
          ref={nameRef}
        />
        <input
          className='form__element'
          placeholder='Age'
          ref={ageRef}
          type='number'
        />
        <input
          className='form__element'
          placeholder='Email'
          ref={emailRef}
          type='email'
        />
        <input
          className='form__element'
          placeholder='Password'
          type='password'
          ref={passwordRef}
        />
        <button className='form__button'>Submit</button>
        <p className='form__link'>
          <span>Back to</span>{' '}
          <NavLink className='link__text' to='/login'>
            Login
          </NavLink>
        </p>
      </form>
    </div>
  )
}
export default Signup
