import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


function JobsNavbar() {

 const [input,setInput] = useState<string>()
  return (
    <main className="mt-[10vh] bg-gray-200">
        <section className='max-w-[1000px] mx-auto p-5'>
            <h1 className="text-center header lg:text-5xl">FIND YOUR DREAM JOB</h1>
            <section className='flex my-5'>
                {/* Search Bar */}
                <section className='flex items-center gap-2 border border-gray-500  px-2'>
                    <input type="text" className='bg-transparent text-black px-4 py-2 outline-none appearance-none' value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <AiOutlineSearch size={20}/>
                </section>
            </section>
        </section>
    </main>
  )
}

export default JobsNavbar