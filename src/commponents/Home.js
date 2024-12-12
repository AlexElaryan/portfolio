import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";

export default function Start() {

    return (
        <div id="home" className="hero w-full h-screen flex flex-col gap-2 justify-center items-center px-[10px]">
            <h1 className="text-center text-4xl font-bold text-white z-10">I AM ALEX ELARYAN</h1>
            <h2 className="text-center text-lg pb-1 border-b-2 z-10 border-white text-white">I'M A CREATIVE WEB DEVELOPER</h2>
            <h3 className="text-center text-sm font-medium text-white z-10">I STAND ON A SWEET SPOT WHERE DESIGN & CODE INTERSECTS.</h3>
            <Link to="intro" className="arrow-down-box">
                <MdKeyboardDoubleArrowDown className="home-arrow-down text-white text-2xl cursor-pointer" />
            </Link>
        </div>
    );
}
// bg-[url('assets/img/me.webp')]