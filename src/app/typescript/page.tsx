import React from 'react';
import Image from "next/image";

const typescript = () => {
    return (
        <div className="flex min-h-screen flex-col bg-[#38bdf8]">
           <Image
           src="/image/typ.jpg"
           alt="image"
           width={1400}
           height={1000}
           />

<h1 className="text-sky-950 text-2xl text-center">Typescript</h1>
   <p className='text-sky-800'>Anders Hejlsberg created TypeScript in 2010 at Microsoft, and its first version was available to the public in 2012, known as TypeScript 0.8. Even so, TypeScript is supported by many software developers, but its major drawback is the lack of IDEs, so many JavaScript developer's communities did not wholly adopt it</p>     
   <Image
           src="/image/ty.png"
           alt="image"
           width={400}
           height={400}
           />
        <ul className='text-sky-800'>During the midst of September, version 2.0 of TypeScript was released, which does not sound too alarming, but it is actually quite a milestone in the history of this JavaScript superset and also a much more refined and sophisticated product. Its refinement can be expressed through the newest and probably most important feature, which is the optional static typing.

According to the project’s manager, Anders Hejlsberg, the new implementations enable developers to work on a larger scale in terms of JavaScript development. The language has an open source history; it has been under the influence of a communal development since 2012, still is and probably will continue to be in the future. It uses transpiling for ECMAScript 3 but can also transpile to newer versions of ECMAScript optionally, therefore guaranteeing a working JavaScript on all browsers. Finally, the package is completed by the means of Tooling, which fits neatly into the ecosystem of Node.js and npm.

All established IDEs and Editors can profit from TypeScript compiler architecture, which allows for plug-ins with code completing and refactoring capabilities. More importantly, it is now possible to handle much larger JavaScript code bases with the existing tools. Even the industry giant, Google, uses TypeScript for their popular framework Angular, a fact that implies the long lifespan of the project. Now let us move on to the main feature of TypeScript, the optional static typing. This feature provides a row of basic types, which are shown in action down below, in Listing 1</ul>


        <Image
           src="/image/typ1.webp"
           alt="image"
           width={700}
           height={700}
           />

        </div>
    )
}
export default typescript;