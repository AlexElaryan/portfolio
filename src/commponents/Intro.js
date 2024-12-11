import React from "react";
import { FaCalendar, FaCheck, FaComments, FaList } from "react-icons/fa";

export default function Intro() {

    return (
        <div id="intro" >
            <div className="site-section flex flex-col gap-[70px] tablet:gap-[30px]">
                <div className="section-subtitle">
                    <h2 className="title">HELLO & WELCOME</h2>
                    <h3 className="subtitle">EXPLORE OUR WORLD</h3>
                </div>

                <div className="grid grid-cols-3 tablet:grid-cols-1">
                    <div className="intro-left-right">
                        <div className="intro-item">
                            <div className="rectangle">
                                <FaCalendar />
                            </div>
                            <h3>We Meet Deadlines</h3>
                            <p>Your deadline is the most important value for us. Our job is to make sure the job is done perfectly before the deadline.</p>
                        </div>
                        <div className="intro-item">
                            <div className="rectangle">
                                <FaComments />
                            </div>
                            <h3>Communication Is Key</h3>
                            <p>Our team is available to check on your questions and take in feedback as soon as possibly.</p>
                        </div>
                    </div>
                    <div className="intro-center">
                        <div className="intro-big-rectangle">
                            <img src={'assets/img/Alex-logo.png'} />
                        </div>
                    </div>
                    <div className="intro-left-right">
                        <div className="intro-item intro-item-right">
                            <div className="rectangle">
                                <FaCheck />
                            </div>
                            <h3>Quality Control</h3>
                            <p>We test out everything to make sure that your project is fully functional, cross–browser compatible and meets your specifications.</p>
                        </div>
                        <div className="intro-item intro-item-right">
                            <div className="rectangle">
                                <FaList />
                            </div>
                            <h3>PIXEL PERFECT</h3>
                            <p>We develop meaningful digital products and experiences that matter with design thinking and creative craftsmanship.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-overlay">
                <h2 className="container relative">We make our <span className="text-[#196fc2]">work look good</span> & have experience in the creation of brand identities for <span className="text-[#196fc2]">print & web,</span> with a difference.</h2>
            </div>
        </div>
    );
}