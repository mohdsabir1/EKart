
import React from 'react';
import { useState } from 'react';
import { IoIosMenu ,IoIosClose, } from "react-icons/io";
import { CiUser,CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full  shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center">
          <Link to='/'><span className="font-bold text-4xl text-black">Kart</span></Link>
          
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className=" ml-36 inline-flex space-x-8 ">
            <NavLink to='/'>
                <li className='ml-0 text-xl font-bold text-black'>Home</li>
            </NavLink>
            <NavLink to='/products'>
                <li className='ml-5 text-xl font-bold text-black'>Products</li>
            </NavLink>
            <NavLink to='/pages'>
                <li className='ml-4 text-xl font-bold text-black'>Pages</li>
            </NavLink>
            <NavLink to='/about'>
                <li className='ml-4 text-xl font-bold text-black'>About </li>
            </NavLink>
            <NavLink to='/contact'>
                <li className='ml-4 text-xl font-bold text-black'>Contact Us </li>
            </NavLink>
          </ul>
        </div>
       
        <div className=' flex space-x-10'>
          <div className='lg:flex rounded-md px-2 hidden border bg-black text-white hover:bg-white hover:text-black '>
            <CiUser size={30 } className='font-semibold '/>
            <button className='font-semibold text-xl px-2  '>Login</button>
          </div>
          <div className='lg:flex rounded-md px-2 hidden border  bg-black text-white hover:bg-white hover:text-black'>
            <CiShoppingCart size={30}/>
            <button className='font-semibold text-xl px-2'>Cart</button>
          </div>
        </div>
        <div className="lg:hidden">
          <IoIosMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    
                    <span className="font-bold text-4xl text-black">Kart</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <IoIosClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="">
                  <ul className=" text-center  ">
            <NavLink to='/'>
                <li className='mb-5 text-xl font-bold text-black'>Home</li>
            </NavLink>
            <NavLink to='/products'>
                <li className='mb-5 text-xl font-bold text-black'>Products</li>
            </NavLink>
            <NavLink to='/pages'>
                <li className=' mb-5 text-xl font-bold text-black'>Pages</li>
            </NavLink>
            <NavLink to='/about'>
                <li className='mb-5 text-xl font-bold text-black'>About </li>
            </NavLink>
            <NavLink to='/contact'>
                <li className='mb-5 text-xl font-bold text-black'>Contact Us </li>
            </NavLink>
          </ul>
                  </nav>
                </div>
                <div className="mt-2 space-y-2 space-x-3">
                <button className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          > Sign In 
          </button>

          <button  className="rounded-md border border-black px-5 hover:bg-[#fa6943s] py-2 text-sm font-semibold text-black shadow-sm " > Cart
          </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
