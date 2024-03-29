import React, { useState } from 'react';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import { Icon } from 'react-icons-kit'
import {alignJustify} from 'react-icons-kit/fa/alignJustify'

const Header = () => {
    const [show, setShow] = useState()
    return (
        <>
            <div className=" headerContent hidden relative z-50  lg:text-white lg:h-20 lg:flex  ">
                <div className="ml-10  mt-4 lg:mr-4 text-2xl " >
                    <HashLink to="/" className=" " >Home</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-2xl">
                    <HashLink to="/#about" className="" >About</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-2xl">
                    <HashLink to="/#skills" className="" >Skills</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-3xl">
                    <HashLink to="/#projects" className="" >Projects</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-2xl">
                    <HashLink to="/#contact" className="" >Contact</HashLink>

                </div>
            </div>

            {/* <div className="lg:hidden flex justify-end text-green-600   px-10 py-6 bg-white">
                <button
                    onClick={() => setShow(!show)}
                >
                   <Icon size={32} icon={alignJustify} />
                </button>
            </div> */}

            {/* {
                show &&
                <div className=" z-10 text-white font-semibold  flex flex-col adsolute bg-white pb-6 lg:hidden  ">
                    <div className="ml-10  mt-4 lg:mr-4 text-lg " >
                        <HashLink to="/" className="text-green-900  hover:text-green-600" >Home</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="/#about" className="text-green-900 hover:text-green-600" >About</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="#skills" className="text-green-900 hover:text-green-600" >Skills</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="#projects" className="text-green-900 hover:text-green-600" >Projects</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="#contact" className="text-green-900 hover:text-green-600" >Contact</HashLink>

                    </div>

                </div>
            } */}
        </>
    );
};

export default Header;