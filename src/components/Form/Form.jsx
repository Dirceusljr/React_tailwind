import React from 'react'

const Form = ({ onSubmit }) => {
    const safeSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({ name, email });
    }
  return <form onSubmit={safeSubmit} className='h-full flex flex-col items-center justify-center -mt-20 gap-10'>
    <input type="text" placeholder='Insira seu nome...' />
    <input type="email" placeholder='Insira seu email...' />
    <button type="submit" className='bg-alura-100 dark:bg-dark-200 text-gray-200 px-5 py-1 rounded-full uppercase'>Seguir</button>
  </form>
}

export default Form