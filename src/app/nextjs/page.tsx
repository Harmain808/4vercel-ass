import React from "react";
import Image from "next/image";
const nextjs = () =>{
    return (
        <div className="flex min-h-screen flex-col bg-[#c7d2fe]">
            <Image 
            src="/image/next2.png"
            alt="image" 
            width={1500} 
            height={700}
            />
            <div>
                <h1 className="text-Indigo-950 text-2xl text-center">NextJs</h1>
                <p className="text-Indigo-900">Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications</p>
<Image 
            src="/image/n1.png"
            alt="image" 
            width={700} 
            height={700}
            />
            
            <ul>October 21st, 2024
Next.js 15
Our mission to create the best developer experience continues with Next.js 15, featuring:

<li>.@next/codemod CLI
,Async Request APIs (Breaking)
,Caching Semantics (Breaking)
,React 19
,Turbopack Dev
,Static Indicator
,unstable_after (Experimental)
,instrumentation.js (Stable)
,next/form
,TypeScript Support for next.config
,Self-hosting
,Server Actions Security
,Bundling external packages (Stable)
,ESLint 9 support
,Development and Build Performance</li></ul>
            
            </div>

        </div>
    )
}
export default nextjs;