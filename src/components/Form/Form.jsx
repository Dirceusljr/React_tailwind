import Input from '../Input/Input';

const Form = ({ onSubmit }) => {
    const safeSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({ name, email });
    }
  return <form onSubmit={safeSubmit} className='h-full flex flex-col items-center justify-center -mt-20 gap-10 mx-5'>
    <Input type="text" required placeholder='Insira seu nome...' />
    <Input type="email" required placeholder='Insira seu email...' />
    <button type="submit" className='bg-alura-100 dark:bg-dark-200 text-gray-200 px-5 py-1 w-full max-w-sm rounded-full uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black'>Seguir</button>
  </form>
}

export default Form