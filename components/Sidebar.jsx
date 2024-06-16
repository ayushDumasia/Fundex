'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoPersonSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";
import { PiFileArrowUpFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { GiCutDiamond } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white w-60 p-4 flex flex-col justify-between border-r-2`}>
        <div>
          <button className="text-black mb-4" onClick={toggleSidebar}>Close</button>
          <nav className="space-y-2 mt-20">
            <Link href="/" className="text-gray-500 flex items-center p-2 rounded hover:text-blue-800"><SiHomebridge size={25} />&nbsp;&nbsp;Home</Link>
            <Link href="/articles" className="text-gray-500 flex items-center p-2 rounded hover:text-blue-800"><MdArticle size={25} />&nbsp;&nbsp;Articles</Link>
            <Link href="/stepform" className="text-gray-500 flex items-center p-2 rounded hover:text-blue-800"><PiFileArrowUpFill size={25} />&nbsp;&nbsp;Guides</Link>
            <Link href="/community" className="text-gray-500 flex items-center p-2 rounded hover:text-blue-800"><BsPeopleFill size={25} />&nbsp;&nbsp;Community</Link>
            <Link href="/premium" className="text-gray-500 flex items-center p-2 rounded hover:text-blue-800"><GiCutDiamond size={25} />&nbsp;&nbsp;Premium</Link>
          </nav>
        </div>
        <div>
          <Link href="/profile" className="text-black flex items-center p-2 rounded hover:text-blue-800"><IoPersonSharp size={24} />&nbsp;&nbsp;Profile</Link>
          <button className="text-black flex items-center p-2 rounded hover:text-blue-800 mt-2"><FaSignOutAlt size={25} />&nbsp;&nbsp;Logout</button>
        </div>
      </div>
      <button className="pr-2 pt-20 bg-blue-500 text-black flex flex-col" onClick={toggleSidebar}>
        <div className="bg-white rounded-full flex items-center justify-center w-10 mb-5 h-10">
          <SiHomebridge size={30} className="text-gray-400" />
        </div>
        <div className="bg-white rounded-full flex items-center justify-center w-10 mb-5 h-10">
          <MdArticle size={30} className="text-gray-400" />
        </div>
        <div className="bg-white rounded-full flex items-center justify-center w-10 mb-5 h-10">
          <PiFileArrowUpFill size={30} className="text-gray-400" />
        </div>
        <div className="bg-white rounded-full flex items-center justify-center w-10 mb-5 h-10">
          <BsPeopleFill size={30} className="text-gray-400" />
        </div>
        <div className="bg-white rounded-full flex items-center justify-center w-10 mb-5 h-10">
          <GiCutDiamond size={30} className="text-gray-400" />
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
