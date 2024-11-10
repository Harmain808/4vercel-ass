import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* React Logo */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-400" fill="currentColor">
              <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="mt-2 text-sm">React</span>
          </div>

          {/* TypeScript Logo */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-600" fill="currentColor">
              <path d="M3 3h18v18H3V3zm14.5 12.5v-2h-6v-2h6v-2h2v6h-2zm-10 0v-6h2v6h-2zm4-6v2h-2v-2h2z"/>
            </svg>
            <span className="mt-2 text-sm">TypeScript</span>
          </div>

          {/* Next.js Logo */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            <span className="mt-2 text-sm">Next.js</span>
          </div>

          {/* Python Logo */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-yellow-300" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-5 5h5zm2-14v5l5-5h-5z"/>
            </svg>
            <span className="mt-2 text-sm">Python</span>
          </div>

          {/* CSS Logo */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" fill="currentColor">
              <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"/>
            </svg>
            <span className="mt-2 text-sm">CSS</span>
          </div>

          {/* JavaScript Logo */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-yellow-400" fill="currentColor">
              <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
            </svg>
            <span className="mt-2 text-sm">JavaScript</span>
            </div>
          {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
               {} All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
          
          </div>
          </div>
          </div>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;