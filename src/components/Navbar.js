import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav
        class="bg-black  
    py-4 text-white  
    w-full flex flex-row justify-between" 
      >
        <div>
          <ul class="ml-8 space-x-4">
            <li class="inline-block">
              <Link to="/home" class="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li class="inline-block">
              <Link
                to="/contact"
                class="hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
            <li class="inline-block">
              <Link
                to="/dashboard"
                class="hover:text-gray-300"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div >
          <ul class="mr-8 space-x-4 inline-block">
            <li class="inline-block">
              <Link to="/login" class="hover:text-gray-300">
                login
              </Link>
            </li>
            <li class="inline-block">
              <Link
                to="/signup"
                class="hover:text-gray-300"
              >
                signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>      
    </div>
  )
}

export default Navbar
