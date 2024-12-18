import React from 'react'
import { useRef } from 'react'

const Tasbeeh = () => {

    const titleref = useRef();

    const handleChange1 = () => {
        titleref.current.innerText = 'Subhan ALLAH'
    }
    const handleChange2 = () => {
        titleref.current.innerText = 'Astagfirullah'
    }
    const handleChange3 = () => {
        titleref.current.innerText = 'Allah hu Akbar'
    }


    return (
        <>
            <div className="bg-red-600 h-[180px] w-[280px] flex flex-col gap-2 justify-center items-center border-white border-2">
                <p className='text-white font-bold' ref={titleref}>ALLAH hu Akbar</p>
                <button className='bg-white border-black rounded px-2 py-1 font-semibold border-2 text-xs'
                    onClick={handleChange1}>Change to - Subhan ALLAH</button>
                <button className='bg-white border-black rounded px-2 py-1 font-semibold border-2 text-xs'
                    onClick={handleChange2}>Change to - Astagfirullah</button>
                <button className='bg-white border-black rounded px-2 py-1 font-semibold border-2 text-xs'
                    onClick={handleChange3}>Back Again</button>
            </div>

        </>
    )
}

export default Tasbeeh
