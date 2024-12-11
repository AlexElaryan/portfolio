import React from "react";
import { useStore } from "../store";
import { Link } from "react-router-dom";

export default function History() {

    const timeline = useStore((store) => store.timeline);

    return (
        <div className="history_parent">
            <div className="site-section history">
                <div className="history-title">
                    <h2>A Look Back At Our History</h2>
                    <p>This my Education and Experience</p>
                </div>
                <div className="history_block">
                    {timeline.map((el, index) => (
                        <div key={el.id} className="timeline">
                            <div className="rectangle history_year">
                                <p>{el.year}</p>
                            </div>
                            <div className={`timeline-box ${index % 2 !== 0 ? 'timeline-box-right' : ''}`}>
                                <div className="rectangle timeline-rectangle"></div>
                                <div className="timeline-content timeline-panel">
                                    <div className="timeline-content-head">
                                        <div className="timeline-date">
                                            <p>{el.time}</p>
                                        </div>
                                        <div className="timeline-title">
                                            <p>{el.position}</p>
                                        </div>
                                    </div>
                                    <div className="timeline-content-middle">
                                        <img src={el.picture} />
                                        <span>{el.information}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="timeline-more rectangle">
                        <p>More</p>
                    </div>
                </div>
            </div>
            <div className="getInTouch for_cv">
                <h2>Looking for My Resume?</h2>
                <p>Discover my skills, experience, and achievements in detail. Click below to download my CV and learn more about my professional journey.</p>
                <Link to="" target="_blank" rel="noopener noreferrer">View My CV</Link>
            </div>
            
        </div>

    );
}