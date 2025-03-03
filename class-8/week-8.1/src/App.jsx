import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='flex justify-between'>
    //   <div className='bg-red-500'>Hello</div>
    //   <div className='bg-green-500'>Hello</div>
    //   <div className='bg-yellow-500'>Hello</div>
    //   <div className='bg-purple-500'>Hello</div>
    //   <div className='bg-grey-500'>Hello</div>
    // </div>

    // <div className='grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 text-2xl p-5'>
    //   <div className='bg-red-500 rounded-2xl'>Hello</div>
    //   <div className='bg-green-500 rounded-2xl'>Hello</div>
    //   <div className='bg-yellow-500 rounded-2xl'>Hello</div>
    //   {/* <div className='bg-purple-500'>Hello</div>
    //   <div className='bg-grey-500'>Hello</div> */}

    // </div>

    <div>
      <RevenueCard title='Total Revenue' amount={1000} orderCount={10} />

    </div>
  )
}

export default App
