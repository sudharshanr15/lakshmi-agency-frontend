import { FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <div className='bg-[#F8F9FA]'>
      <div className="lg:mx-28 mx-10 mt-12  lg:mt-16 mb-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
          <div className="mx-2">
            <div className="flex items-center p-5">
              <img
                src="logo_with_name.svg"
                alt="Logo"
                className="w-40 h-20"
              />
             
            </div>
            <p className="">
              The lakshmi agency Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde sunt exercitationem labore animi quam
              porro, modi, doloribus corrupti omnis, dolorem deserunt odio
              placeat fugit eaque?
            </p>
          </div>

          <div className="mt-2 md:mt-20 mx-2 p-4">
            <h1 className="text-2xl font-bold mt-5 text-[#004b71]">About us</h1>
            <p className="mt-4 mx-auto"></p>
            <span className="text-1xl">
              <p className="mt-3">Our careers</p>
              <p className="mt-3">Our partners</p>
              <p className="mt-3">Our clients</p>
            </span>
          </div>

          <div className="mt-2 md:mt-20 mx-2  p-4">
            <h1 className="text-2xl text-[#004b71] font-bold mt-2">
              Resources
            </h1>
            <p className="mt-4 mx-auto"></p>
            <span className=" text-1xl">
              <p className="mt-3">Blogs</p>
              <p className="mt-3">Offer page</p>
              <p className="mt-3">Tutorials</p>
              <p className="mt-3">Clients page</p>
            </span>
          </div>

          <div className="mt-2 md:mt-20 p-4 mb-16">
            <h1 className="text-2xl font-bold mt-5 text-[#004b71]">Reach us</h1>
            <p className="mt-4 mx-auto"></p>
            <span className=" text-1xl">
              <p className="mt-3">Contact us</p>
            </span>
          </div>
        </div>
      </div>

      <footer className="hidden md:block shadow bg-[#0A4E71]">
        <div className="w-full p-4 md:flex md:items-center md:justify-between">

          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Copyrights@2022.All rights reserved by Lakshmi Agency</a>
            </li>
            <li>
              <span href="#" className="mr-4 hover:underline md:mr-6">|</span>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <span href="#" className="mr-4 hover:underline md:mr-6">|</span>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Cookie policy</a>
            </li>
            <li>
              <span href="#" className="mr-4 hover:underline md:mr-6">|</span>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of use</a>
            </li>
          </ul>

          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center space-x-4">
            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
              <FaFacebookF className="h-6 w-6 text-white" />
            </span>
            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
              <FaTwitter className="h-6 w-6 text-white" />
            </span>
            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
              <FaLinkedinIn className="h-6 w-6 text-white" />
            </span>
            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
              <FaLinkedinIn className="h-6 w-6 text-white" />
            </span>
            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
              <FaLinkedinIn className="h-6 w-6 text-white" />
            </span>
          </span>
        </div>
      </footer>


    </div>



  );
}

