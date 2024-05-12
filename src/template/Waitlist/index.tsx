import LoginFormComponent from '@/organisms/waitlist'
import LoginHeaderComponent from '@/molecules/waitlist/header'
import './style.css'


const WaitlistPageTemplate = () => {
  return (
    <main className='landingpage relative '>
        <img alt='' src="/pages/landing/strip.svg" width={600} height={583} className='pattop' />
        <div className='maincontentitems'>
            <LoginHeaderComponent/>
     
            <div className='flex max-xl:gap-12 max-xl:flex-col z-10 relative max-md:px-8'>
    
                <div className='flex-1 max-md:mt-12 mt-40  pl-24 max-md:pl-0'>
                    <h2>Secure your spot <br></br> and grow with other <br></br> top founders</h2>
                    <p className='pt-2'>The valley is the number one platform for founders like you!</p>
                    <LoginFormComponent/>
                </div>
                <div className=' flex-1 relative right-0'>
                    <img alt='' src="/pages/landing/Home.png" className='banner-img '/>
                </div>
            </div>
        </div>
     <img alt='' className='patbottom' src="/pages/landing/strip1.svg" width={800} height={1103}/>
    </main>
  )
}

export default WaitlistPageTemplate
