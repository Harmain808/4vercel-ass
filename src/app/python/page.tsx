import React from 'react';
import Image from "next/image";

const python = () => {
    return (
        <div className="flex min-h-screen flex-col bg-[#a3e635]">
           <Image
           src="/image/py.jpg"
           alt="image"
           width={1500}
           height={500}
           />
        
        <h1 className="text-lime-950 px-2 text-center text-2x">Python</h1>
        <p className="text-lime-900">Python was created by Guido van Rossum, and first released on February 20, 1991. While you may know the python as a large snake, the name of the Python programming language comes from an old BBC television comedy sketch series called Monty Python's Flying Circus.</p>
        
        <Image
           src="/image/py1.jpg"
           alt="image"
           width={700}
           height={500}
           />

           <ul className='text-lime-950'>Here are some key events in the history of the Python programming language:
Conception
Guido van Rossum, a Dutch programmer, began developing Python in the late 1980s as a hobby project. 
First release
Python was first released on February 20, 1991. 
Name
Python was named after the 1970s BBC comedy sketch series Monty Python's Flying Circus, which van Rossum was a fan of. 
Python 2.0
Released in 2000, this version included new features like list comprehensions, garbage collection, and Unicode support. 
Python 3.0
Released in 2008, this version is one of the most used versions of Python. 
Python 3.5
This version included new features like asynchronous I/O, type hints, and coroutines. 
Python 3.7.4
Released in the summer of 2019, this is the latest stable version of Python. 
Security updates
In 2021, security updates were expedited for all Python versions due to security issues. 
Python is a general-purpose, high-level programming language that's known for its cross-platform compatibility, allowing it to run on Windows, Mac, and Linux. It's also easy to integrate with other languages like C and C++. 
The Python Software Foundation is a non-profit organization that maintains Python and works to improve, expand, and popularize the language</ul>
    


           </div>
           
)
}
export default python;