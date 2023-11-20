import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";

import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import {  FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";

const SideBar = () => {
  const menus = [
    { name: "Overview", link: "/", icon: MdOutlineDashboard },
    { name: "Onboarding", link: "/", icon: AiOutlineUser },
    { name: "Monitoring", link: "/", icon: BsCameraReels },
    { name: "Flagging", link: "/", icon: TbReportAnalytics },
    { name: "source of Income", link: "/", icon: FiFolder },
    { name: "UAR", link: "/", icon: FiFolder },
    
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={` min-h-screen ${
          open ? "w-full" : "w-16"
        } duration-500 bg-gray-100 text-gray-900  px-4`} 
      > 

    
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
            
          />
         
        </div>

        <div className="mt-9 mb-[50px] flex flex-col gap-4 relative items-center">
          <h1 className=" text-gray-500 items-center font-extrabold">
            LOGO HERE 
          </h1>

        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-300 rounded-md`}
            >
                
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-gray-900 font-semibold whitespace-pre text-gray-100 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>

        <div className="mt-[175px] mb-[50px] flex flex-col gap-4 relative items-center ">
        <div class='mr-1 flex space-x-5'>
                        <div class='text-right'>
                            <div class='font-bold text-xl '>
                                Dipanshu Garg
                            </div>
                            <div class='font-light text-sm'>
                                EEE
                            </div>
                        </div>
                        <div class='flex align-middle'>
                            <img class='rounded-xl' width='45px' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80" alt="user" />
                        </div>
                    </div>

        </div>
      </div>
     
    </section>
  );
};

export default SideBar;