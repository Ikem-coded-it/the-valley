import './style.css';

const LoginHeaderComponent = () => {
  
  return (
    <div className='loginheadercomponent my-0 mx-auto max-md:mx-2 w-[80%] py-0 px-[30px] max-md:px-[30px] max-md:w-[100%] max-md:py:2 relative h-[91px] '>
        <div className='logo mt-4 max-md:mt-0'>
            <img src="/logos/white-logo.png" alt='logo' width={130} height={24} className="pt-6"/>
        </div>
    </div>
  )
}

export default LoginHeaderComponent
