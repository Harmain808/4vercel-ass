import React from 'react'
import Link from "next/link"
 const Navbar =()=> {
    return (
        <header className="bg-gradient-to-bl from-pink-600 via-lime-300 via-30% to-rose-600">
            <h1 className='text-6xl font-bold text-black text-center chat-notification-title'>Hello World</h1>

            <ul className='flex gap-3 mr-4 cursor-pointer'>
            <p className="text-white hover:underline mx-4 "><Link href="/html">Html</Link></p>
         <h2 className="text-white hover:underline mx-4"> <Link href="/javascript">Javascript</Link></h2>
          <p  className="text-white hover:underline mx-4 "><Link href="/nextjs">Next js</Link></p>
          <p className="text-white hover:underline mx-4 "><Link href="/python">Python</Link></p>
         <p className="text-white hover:underline mx-4"> <Link href="/typescript">Typescript</Link></p>
          <p  className="text-white hover:underline mx-4 "><Link href="/css">Css</Link></p>
        </ul>
      
        </header>
        
    );
 }
 export default Navbar