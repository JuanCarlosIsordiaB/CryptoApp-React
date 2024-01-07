
import React, { useEffect } from 'react'


export const Formulario = () => {

  return (
    <div>
        <form 
            action=""
            className='text-center mt-14'
        >
            <input 
                type="text" 
                className='w-full py-3 rounded-md px-3 '
            />
            <button
                className='font-bold bg-indigo-700 rounded-md px-5 py-3 text-white uppercase w-full shadow-md mt-5 hover:bg-indigo-900 transition-all'
            >
                Search
            </button>
        </form>
    </div>
  )
}
