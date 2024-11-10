"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <ul>Welcome My Website</ul>
             <ul>I'm Harmain</ul>
              i'm a programmer
            
          </h1>
          <div className="text-white text-2xl">Programmer</div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">A programmer is a person who writes, tests, and modifies computer programs and applications: 
Responsibilities
Programmers use computer languages like C++ and Java & Typescript Next Js to write code that allows computers to perform tasks. They also test programs to ensure they work as expected, and fix any errors they find</p>
          <div className="text-zinc-200 text-center"><b>Programming</b></div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Programming is the process of writing instructions, or code, for a computer to follow in order to perform tasks. Programmers use programming languages to design and implement algorithms, which are step-by-step specifications of procedures. 
Programming is a collaboration between humans and computers. Programmers write, test, and maintain code to build software, applications, and systems that solve problems. Programming is used in many areas, including: Controlling Mars rovers, Processing medical data, Producing special effects in movies, Ordering take-out, and Streaming movies. 
Some programming languages include: Python, JavaScript, Typescript, Html, and C++, Next JS
          </p>
          
        </div>

      
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src='/image/hero-image.png'
              alt="image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
    
    </section>
  );
};

export default Hero;