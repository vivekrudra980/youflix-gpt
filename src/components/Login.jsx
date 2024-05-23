import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
          alt='background'
        />
      </div>
      <form className='absolute bg-black w-3/12 text-white my-44 mx-auto p-8 right-0 left-0 bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-2xl'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            className='p-4 my-2 w-full bg-gray-800'
            type='text'
            name='fullname'
            placeholder='Enter your full name'
          />
        )}
        <input
          className='p-4 my-2 w-full bg-gray-800'
          type='text'
          name='username'
          placeholder='Enter email or phone number'
        />
        <input
          className='p-4 my-2 w-full bg-gray-800'
          type='password'
          name='password'
          placeholder='Enter Password'
        />
        <button
          type='submit'
          className='w-full my-4 h-10 bg-red-700 rounded-lg'
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='cursor-pointer' onClick={handleClick}>
          {isSignInForm ? 'Not registered yet?' : 'Already registered'}{' '}
          <span className='font-bold'>
            {!isSignInForm ? 'Sign In' : 'Sign Up'}
          </span>{' '}
          now!
        </p>
      </form>
    </div>
  );
};

export default Login;
