import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-50'>
        <div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>

            <div className='flex flex-col items-center justify-around md:flex-row'>
                <img className='scale-50' src="../../public/logo.svg"></img>
           </div>
        </div>
    </footer>
  )
}

export default Footer
