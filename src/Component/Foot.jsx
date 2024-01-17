
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Foot() {
  return (
    <Footer container className='lg:mt-24 mt-14'>
      <div className="w-full">
        <div className="">
          <div>
            <Link to='/'><p className='text-5xl font-semibold'>Kart</p></Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="UseFull Link" />
              <Footer.LinkGroup col>
               <ul className='gap-5'>
               <Link to='/'><li className='mb-3'>Home</li></Link> 
               <Link to='/'><li className='mb-3'>Products</li></Link> 
               <Link to='/'><li className='mb-3'>Pages</li></Link> 
               <Link to='/'><li className='mb-3'>About</li></Link> 
               <Link to='/'><li>Contact Us</li></Link> 
               </ul>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Information" />
              <Footer.LinkGroup col>
              <ul className='gap-5'>
               <Link to='/'><li className='mb-3'>Terms & Conditions</li></Link> 
               <Link to='/'><li className='mb-3'>Order Track</li></Link> 
               <Link to='/'><li className='mb-3'>Delivery</li></Link> 
               <Link to='/'><li className='mb-3'>FAQ</li></Link> 
               <Link to='/'><li className='mb-3'>Return Policies</li></Link> 
               <Link to='/'><li>Contact Us</li></Link> 
               </ul>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Kart" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon  icon={BsFacebook} />
            <Footer.Icon  icon={BsInstagram} />
            <Footer.Icon  icon={BsTwitter} />
            <Footer.Icon  icon={BsGithub} />
            <Footer.Icon  icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Foot