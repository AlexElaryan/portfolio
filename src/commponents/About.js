import React, { useRef, useState } from "react";
import { useStore } from "../store";

export default function Intro() {

    const goals = useStore((store) => store.goals);
    const skills = useStore((store) => store.skills);
    const counters = useStore((store) => store.counters);

    const [progressVisible, setProgressVisible] = useState(false);
    const [countersVisible, setCountersVisible] = useState(false);
    const [progressCounts, setProgressCounts] = useState(Array(skills.length).fill(0));;
    const [counterCounts, setCounterCounts] = useState(Array(counters.length).fill(0));

    const progressRefs = useRef(skills.map(() => React.createRef()));
    const counterRefs = useRef(counters.map(() => React.createRef()));


    function countProgress() {
        skills.forEach((skill, index) => {
            count(index, skill.data, setProgressCounts);
        });
    }

    function countCounters() {
        counters.forEach((item, index) => {
            count(index, item.count, setCounterCounts);
        })
    }

    function count(index, maxValue, setCounts) {
        let currentValue = 0;
    
        function increment() {
            if (currentValue < maxValue) {
                setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.min(currentValue + 1, maxValue);
                    return newCounts;
                });
                currentValue++;
                setTimeout(increment, maxValue / 100);
            }
        }
    
        increment(); 
    }
    const useIntersectionObserver = useStore((store) => store.useIntersectionObserver);
    useIntersectionObserver(progressRefs, progressVisible, setProgressVisible, countProgress);
    useIntersectionObserver(counterRefs, countersVisible, setCountersVisible, countCounters);


    return (
        <div id="about" className="w-full pb-[0px] flex flex-col">
            <div className="about-top site-section flex flex-col gap-[70px] pb-[100px]">
                <div className="section-subtitle">
                    <h2 className="title">ABOUT ALEX WORK</h2>
                    <h3 className="subtitle">Our goal is to build products and services</h3>
                </div>

                <div className="about-box grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1">
                    {goals.map(item => (
                        <div key={item.id}>
                            <div className="rectangle">{item.icon}</div>
                            <h2>{item.title}</h2>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#F6F6F6] py-[100px]">
                <div className="container skills-block grid grid-cols-2 tablet:grid-cols-1 tablet:gap-12">
                    <div className="px-[15px] flex flex-col">
                        <h2>Introduction video</h2>
                        <iframe src="https://player.vimeo.com/video/158928871" width="100%" height="280" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen />
                    </div>
                    <div className="px-[15px] flex flex-col">
                        <h2>SKILLS WE GOT</h2>

                        <div className="skills-box">
                            {skills.map((skill, index) => (
                                <div key={skill.id} className="flex flex-col gap-[10px]">
                                    <h3>{skill.title}</h3>
                                    <div className="skills-progress">
                                        <div className={`progress-bar ${progressVisible ? `progress-bar${index + 1}` : ''} `} ref={progressRefs.current[index]} style={{ width: `${progressCounts[index]}%` }}>
                                            <span>{progressCounts[index]}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-counters site-section">
                <div className="grid grid-cols-5 tablet:grid-cols-2 tablet:pb-0 justify-center items-center px-[8.3%]">
                    {counters.map((item, ind) => (
                        <div key={item.id} className="about-counters-item flex flex-col items-center px-[15px] gap-[30px] tablet:mt-[40px]">
                            <div className="rectangle flex-col" ref={counterRefs.current[ind]}>
                                {item.icon}
                                <p className="text-black rotate-[-45deg]">{counterCounts[ind]}</p>
                            </div>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}