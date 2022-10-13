import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-background flex align-center">
      <div className='w-11/12 h-5/6 bg-white m-auto rounded grid lg:grid-cols-2 sm:divide-x'>
        <div className='rounded flex relative flex-col'>
          <div className='absolute top-4 left-4'>
            <div className='font-bold'>&#9679; Untitled</div>
          </div>
          <div className='h-full flex'>
            <div className='m-auto w-5/6 md:w-1/2 sm:w-1/2 lg:w-1/2'>
              <p className='text-xl sm:text-3xl md:text-3xl lg:text-3xl mb-5 font-bold'>Welcome back</p>
              <p className='text-sm mb-5 text-slate-500'>Welcome back! Please enter your details.</p>
              <div className='font-bold mb-2'>Email</div>
              <input type="text" className='w-full border-slate-200 px-2 py-2 border-2 rounded-lg mb-3'/>
              <div className='font-bold mb-2'>Password</div>
              <input type="text" className='w-full border-slate-200 px-2 py-2 border-2 rounded-lg'/>
              <div className='sm:flex lg:flex md:flex relative my-5'>
                <div className='font-semibold text-sm'>
                <input type="checkbox" value="" id="flexCheckDefault"/> remember for 30 days
                </div>
                <div className='lg:absolute sm:absolute md:absolute lg:right-0 sm:right-0 md:right-0 text-sm font-bold text-primary'>
                  Forgot password
                </div>
              </div>
              <button className='bg-primary w-full py-2 rounded-lg text-white'>Sign in</button>
              <div className='my-4'></div>
              <button className='w-full py-2 rounded-lg border-slate-200 border-2'>Sign in with Google</button>
            </div>
          </div>
        </div>
        <div className='bg-surface lg:flex relative items-center justify-center rounded hidden lg:block'>
          <div className='h-72 w-72 bg-primary rounded-full'></div>
          <div className='w-full h-2/4 bg-white/30 absolute bottom-0 backdrop-blur-md'></div>
        </div>
      </div>
    </div>
  )
}

export default App
