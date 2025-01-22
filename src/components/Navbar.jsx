import  { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-end items-center">
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex md:space-x-4 space-y-4 md:space-y-0 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-500 text-xl">
              Home
            </a>
          </li>
          <li>
            <a href="/grid" className="text-gray-700 hover:text-blue-500 text-xl">
              Grid
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/thisisanujpratapsingh/" className="text-gray-700 hover:text-blue-500 text-xl">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
