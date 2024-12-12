import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useStore } from "../store";

export default function Header() {

    const [hovered, setHovered] = useState(null);
    const [logoleft, setLogoleft] = useState('0px');
    const [collapsed,setCollapsed] = useState(false);
    const containerRef = useRef(null); 

    const updateLogoLeft = () => {
        if (containerRef.current) {
            const containerStyle = window.getComputedStyle(containerRef.current);
            setLogoleft(containerStyle.marginLeft);
        }
    };

    useEffect(() => {
        updateLogoLeft();

        window.addEventListener('resize', updateLogoLeft);

        return () => {
            window.removeEventListener('resize', updateLogoLeft);
        };
    }, []);
    
    const links = useStore((store) => store.links);
    const burgerOpen = () => {setCollapsed(prev => !prev)}
    const getLinkClass = (section) => (hovered === section ? 'onhoverLink' : '');

    return (
        <div className="header z-[999] sticky top-[0px] w-full h-[60px] flex items-center bg-[#196fc2]">
            <div className="header-left bg-[#004b91] h-full flex items-center absolute left-0 top-0" style={{paddingLeft: logoleft}}>
                <a href="#home" className="text-white text-3xl font-normal cursor-pointer pl-[15px] pr-[30px]">ALEX</a>
            </div>
            <div className="container relative flex h-full justify-end" ref={containerRef}>
                    <nav className={`max-w-fit h-full ${collapsed ? 'navbarmobOpen' : ''}`}>
                    <ul className="h-full flex justify-between gap-6">
                        {links.map((obj) => (
                            <li key={obj.to} >
                                <Link className={getLinkClass(obj.to)}
                                    to={obj.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={100}
                                    onMouseEnter={() => setHovered(obj.to)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    {obj.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={`navbar-toggle ${collapsed ? 'collapsed' : ''}`} onClick={burgerOpen}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
        </div>
    );
}
