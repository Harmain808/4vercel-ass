import React from 'react';
import Image from "next/image";

const css = () => {
    return (
        <div className="flex min-h-screen flex-col bg-[#60a5fa]">
           <Image
           src="/image/css.png"
           alt="image"
           width={1500}
           height={700}
           />
        

           <h1 className="text-blue-950 text-2xl text-center">Css</h1>
           <p className='text-blue-800'>The history of Cascading Style Sheets (CSS) includes the following key events:
           1994
           Håkon Wium Lie, a Norwegian technologist at CERN, proposed the idea of CSS. 
           1996
           The first version of CSS was released. 
           1998
           CSS 2 was released, and work began on CSS 3. CSS 2 improved layout control and allowed users to specify how content would appear on different platforms. 
           2011
           CSS 3 was released, which added new features like responsive web design and support for new font types. CSS 3 was published as a set of separate documents called modules, each dealing with a small subset of the overall specification. 
           2000
           CSS became popular as browsers began to use more than basic fonts and colors. 
           CSS is used to define styles for web pages, including the design, layout, and how content appears on different devices and screen sizes. The term "cascade" refers to the priority scheme that determines which CSS rules are applied when multiple rules target an element</p>
           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src='/image/css2.webp'
              alt="image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          <Image
           src="/image/css 1.jpg"
           alt="image"
           width={700}
           height={700}
           />
           <ul className='text-blue-950'>CSS Version History
CSS1 (1996): The first official CSS specification, CSS1, was introduced in 1996. It allowed for basic stylings, such as changing text colors, fonts, and backgrounds, but was limited in terms of layout control.

CSS2 (1998): CSS2, released in 1998, introduced a plethora of new features, including positioning, improved control over layout, and the introduction of media types for different devices.

CSS2.1 (2011): This version focused on clarifying and improving the CSS2 specification, providing greater stability and browser compatibility.

CSS3 (ongoing): CSS3 is not a single monolithic release but a collection of modular specifications introduced gradually. These modules cover various aspects of web design, such as animations, gradients, and flexible box layouts.

CSS4 (in development): CSS4 is the future of CSS, aiming to further enhance web design capabilities, including responsive design, variable fonts, and improved grid systems</ul>
       
        </div>
    )
}
export default css;