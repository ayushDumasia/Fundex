'use clinet';
import { useState } from 'react';
import Link from 'next/link';
import { IoPersonSharp } from 'react-icons/io5';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { LuLayoutGrid } from 'react-icons/lu';
import { PiTargetThin } from 'react-icons/pi';
import { GiCash } from 'react-icons/gi';
import { IoDocuments } from 'react-icons/io5';
import { BiTransferAlt } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { email } = useSelector((state) => state.user);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex font-normal  text-white z-40">
            <div
                className={`fixed inset-y-0 rounded-3xl left-0 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out bg-[#1c1c24]  w-60 p-4 flex flex-col justify-between `}
            >
                <div>
                    <button className="mb-4 " onClick={toggleSidebar}>
                        <IoCloseOutline size={30} />
                    </button>
                    <Link href="/profile" passHref>
                        <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                            <FaRegUser size={25} />
                            &nbsp;&nbsp;{email}
                        </p>
                    </Link>
                    <nav className="space-y-2 mt-20 font-normal">
                        <Link href="/manage">
                            <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                                <LuLayoutGrid size={25} />
                                &nbsp;&nbsp;Dashboard
                            </p>
                        </Link>
                        <Link href="/target" passHref>
                            <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                                <PiTargetThin size={25} />
                                &nbsp;&nbsp;Target
                            </p>
                        </Link>
                        <Link href="/funding" passHref>
                            <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                                <GiCash size={25} />
                                &nbsp;&nbsp;Funding
                            </p>
                        </Link>
                        <Link href="/transfer" passHref>
                            <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                                <BiTransferAlt size={25} />
                                &nbsp;&nbsp;Transfer
                            </p>
                        </Link>
                        <Link href="/articles" passHref>
                            <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                                <IoDocuments size={25} />
                                &nbsp;&nbsp;Articles
                            </p>
                        </Link>
                        <Link href="/logout" passHref>
                            <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                                <MdLogout size={25} />
                                &nbsp;&nbsp;Logout
                            </p>
                        </Link>
                    </nav>
                </div>
                <div>
                    <Link href="/profile" passHref>
                        <p className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                            <IoPersonSharp size={24} />
                            &nbsp;&nbsp;Profile
                        </p>
                    </Link>
                    <button className=" flex items-center p-2 h-[3.5rem]  rounded hover:bg-[#384152] transition-all">
                        <FaSignOutAlt size={25} />
                        &nbsp;&nbsp;Logout
                    </button>
                </div>
            </div>

            <div
                className="pr-2 pt-20 bg-[#1c1c24]  flex flex-col"
                // onClick={toggleSidebar}
            >
                <button
                    onClick={toggleSidebar}
                    className="mb-[50px] ml-[15px]"
                    title="open sidebar"
                >
                    <FaChevronRight />
                </button>
                <Link
                    href="/"
                    className="p-3 hover:bg-[#384152] rounded-md"
                    title="Dashboard"
                >
                    <LuLayoutGrid size={25} />
                </Link>
                <Link
                    href="/"
                    className="p-3 hover:bg-[#384152] rounded-md"
                    title="Target"
                >
                    <PiTargetThin size={25} />
                </Link>
                <Link
                    title="Funding"
                    href="/funding"
                    className="p-3 hover:bg-[#384152] rounded-md"
                >
                    <GiCash size={25} />
                </Link>
                <Link
                    title="Transfer"
                    href="/transfer"
                    className="p-3 hover:bg-[#384152] rounded-md"
                >
                    <BiTransferAlt size={25} />
                </Link>
                <Link
                    href="/articles"
                    className="p-3 hover:bg-[#384152] rounded-md"
                    title="Articles"
                >
                    <IoDocuments size={25} />
                </Link>
                <Link
                    href="/logot"
                    className="p-3 hover:bg-[#384152] rounded-md"
                    title="Logout"
                >
                    <MdLogout size={25} />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
