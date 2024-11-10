import React from "react";
import Image from "next/image";

const javascript = () => {
    return(
    <div className="flex min-h-screen flex-col bg-[#fef08a]">
        <Image
        src="/image/jv.png"
        alt="image"
        width={1500}
        height={1500}
        className="object-position: center;"
        />
        
        <div>
        <h1 className="box-border h-18 w-18 p-4 border-4 box-decoration-slice bg-gradient-to-r from-yellow-700 to-yellow-300 text-yellow-950 px-2 text-center text-2xl underline decoration-yellow-950">Javascript</h1>
        <p className="text-yellow-900 text-lg">Based on that, JavaScript was created by Brendan Eich in September 1995. He took inspiration from three languages—Java, Self, and Scheme—to create JavaScript. JavaScript derives its syntax from Java, its first-class functions from Scheme, and its prototype-based inheritance from Self.

The name JavaScript is a result of marketing strategies. At the beginning, Brendan Eich called it Mocha (a code name). Inside Netscape, they used the name LiveScript. Yet, when they had to choose a public name, “JavaScript” was the winner.

Why? This language was made to interest Java programmers, and “script” was trendy for describing lightweight programs back then. These lightweight “scripts” were the first to be put into pages on this new thing called the web!

On September 18, 1995, Netscape Communications Corporation released the Netscape Navigator 2.0 web browser</p>
<ul className="text-xl text-yellow-900">JavaScript is a programming language that represents one of the three core languages used to develop websites, alongside HTML and CSS. Whereas HTML and CSS give a website structure and style, JavaScript lets you add functionality and behaviors to your website. This allows visitors to interact with your website in various creative ways</ul>
<Image src="/image/JavaScript.png" alt="image" width={500} height={600} />
<p className="text-yellow-800 list-disc"><li>List of Versions from ES (ECMAScript)</li>
<li>ES1 - 1997</li>
<li>ES2 - 1998</li>
<li>ES3 - 1999</li>
<li>ES4 - Abandoned (2003)</li>
<li>ES5 - 2009</li>
<li>ES6 - 2015</li>
<li>ES7 - 2016</li>
<li>ES8 - 2017</li>
<li>ES9 - 2018</li>
<li>ES10 - 2019</li>
<li>ES11 - 2020</li>
<li>ES12 - 2021</li>
<li>ES13 - 2022</li>
<li>ES14 - 2023</li></p>
<div>
    <p className="text-yellow-900 text-xl">JavaScript can be found virtually everywhere on the Internet. It has been named the most widely used programming language several times with over 64.9 percent of developers using it in 2021</p>
<Image src="/image/java1.png" alt="image" width={900} height={900}/>

</div>
</div>
   </div>    
    )
}
export default javascript;