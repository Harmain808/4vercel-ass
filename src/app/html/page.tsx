import React from 'react'
import Image from 'next/image'

const html = () => {
  return (
    <div  className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Image
          src="/image/html1.jpg"
          alt="image"
          width={1500}
          height={700}
          className="h-auto bg-bottom rounded-lg shadow-md" 
/>
      <div className='underline bg-Neutral-400 text-white'>The full form of HTML is Hypertext Markup Language. HTML is a standard mark–up language that used build files that are showcased as a web page throughout the browsers</div>
      <Image
          src="/image/html.png"
          alt="image"
          width={700}
          height={700}
          className="w-1/2 h-auto bg-bottom rounded-lg shadow-md" 
  />
      <div>
        <p className='bg-stone-100'>The history of HTML, or Hypertext Markup Language, includes the development of the language from its origins in the European Organization for Nuclear Research (CERN) to its current use worldwide</p> 
<ul className='list-inside bg-gradient-to-r from-stone-100 via-Slate-600 to-grey-300'><li>1980s and 1990s: Computer scientist Tim Berners-Lee developed the first HTML tags at CERN to help researchers organize scientific information</li> 
<li>1991: Berners-Lee invented HTML 1.0</li> 
<li>1993: The first version of HTML was released</li>
<li>1995: HTML 2.0 was published, which included new features in addition to those in HTML 1.0</li>
<li>1997: HTML 3.0 was invented, which included new features and improved the capabilities of webmasters</li> 
<li>1999: HTML 4.0 was released and became widely used</li>
<li>2014: HTML 5.0, also known as HTML5, was released and is currently used worldwide. HTML5 is an extended version of HTML 4.01, which was published in 2012.</li>
</ul>
</div>
    </div>
  )
}

export default html