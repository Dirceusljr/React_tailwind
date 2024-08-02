import React from 'react'

const Input = (props) => {
  return <input className='py-1 pl-5 w-full max-w-lg rounded-full text-dark-200 dark:text-gray-200 dark:bg-dark-200 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400' {...props} />
}

export default Input