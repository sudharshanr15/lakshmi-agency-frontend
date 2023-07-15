import { FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitterz} from 'react-icons/fa';

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
            <h1 className="text-2xl text-[#004b71] mt-5 font-bold mt-2">
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

      {/* <div className="lg:mt-10 mt-2 bg-[#004b71] p-2 rounded-md">
        <div className="flex justify-between  lg:mx-24">
          <span className="text-white font-normal mt-1">
            Copyrights@2022. All rights reserved by Lakshmi Agency
          </span>
          <span className="text-white font-normal mt-1">
            Privacy poliy
          </span>
          <span className="text-white font-normal mt-1">
            Cookie policy
          </span>
          <span className="text-white font-normal mt-1">
            Terms of use
          </span>

          <div className="mr-0">
            <div className="flex">
              
              
              <div className="text-center bg-white h-8 w-8 flex items-center justify-center rounded-md">
                <FaFacebookF className="h-5 w-5"/>
              </div>
              <div className="text-center bg-white h-8 w-8 flex items-center justify-center rounded-md mr-2">
                <FaLinkedinIn className="h-5 w-5"/>
              </div>
              <div className="text-center bg-white h-8 w-8 flex items-center justify-center rounded-md">
                <FaInstagram className="h-5 w-5"/>
              </div>
              <div className="text-center bg-white h-8 w-8 flex items-center justify-center rounded-md">
                <FaTwitterz className="h-5 w-5"/>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>



  );
}

