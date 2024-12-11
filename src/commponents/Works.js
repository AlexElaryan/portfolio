import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { useStore } from '../store';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Works() {

    const portfolio = useStore((store) => store.portfolio);
    const result = useStore((store) => store.result);
    const activeCategory = useStore((store) => store.activeCategory);
    const selectedProject = useStore((store) => store.selectedProject);
    const sort = useStore((store) => store.sort);
    const openModal = useStore((store) => store.openModal);
    const closeModal = useStore((store) => store.closeModal);
    const animItems = useStore((store) => store.animItems);

    useEffect(() => {
        if (animItems) {
            const timer = setTimeout(() => {
                useStore.getState().setAnimItems(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [animItems]);


    return (
        <div id='works'>
            <div className="site-section">
                <div className="section-subtitle">
                    <h2 className="title">RECENT WORKS</h2>
                    <h3 className="subtitle">OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</h3>
                </div>
                <div className="works-block">
                    <ul className="works-filters">
                        <li><a onClick={() => sort('All')} className={`${activeCategory === 'All' ? 'active' : ''}`}>All</a></li>
                        {Object.entries(portfolio).map(([key, category]) => (
                            <li key={category.id}><a onClick={() => sort(category.title)} className={`${activeCategory === category.title ? 'active' : ''}`}>{category.title}</a></li>
                        ))}
                    </ul>
                    <div className="works-content">
                        {/* <AnimatePresence> */}
                        {Object.entries(result).map(([key, category], index) => {
                            return category.projects.map((project, projectIndex) => (
                                <div key={project.id}
                                    // layout
                                    // animate={{ opacity: 1 }}
                                    // initial={{ opacity: 0 }}
                                    // exit={{ opacity: 0 }}


                                    className={`portfolio-item ${animItems ? "anim" : ""}`} >

                                    <div className='portfolio-item-thumb'>
                                        <img src={project.img} className='img-res' />
                                        <button className='rectangle' onClick={() => openModal(project.id)}>
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <div className='portfolio-item-info'>
                                        <h3>{project.subtitle}</h3>
                                        <p>{category.title}</p>
                                    </div>

                                </div>
                            ))
                        })}
                        {/* </AnimatePresence> */}
                    </div>
                </div>

                {/* Modal start */}

                {selectedProject && (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, pointerEvents: 'none' }}
                            animate={{ opacity: 1, pointerEvents: 'all' }}
                            exit={{ opacity: 0, pointerEvents: 'none' }}
                            className='portfolio-modal-block'>
                            <motion.div
                                animate={{ scale: 1 }}
                                initial={{ scale: 0 }}
                                exit={{ scale: 0 }}

                                className='portfolio-modal'>
                                <div className='portfolio-modal-close rectangle' onClick={closeModal}>
                                    <IoCloseSharp />
                                </div>
                                <div className='modal-header'>
                                    <img src={selectedProject.img} />
                                </div>
                                <div className='modal-body'>
                                    <h3>{selectedProject.projectTitle}</h3>
                                    <p>{selectedProject.about}</p>
                                </div>
                                <div className='modal-footer'>
                                    <RouterLink className='visit-page' target="_blank" to={selectedProject.link}>Visit Page</RouterLink>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}

                {/* Modal end */}

            </div>

            <div className="getInTouch">
                <h2>Are You Impressed By My Work?</h2>
                <p>Let's collaborate and bring your vision to life! Ready to start something amazing?</p>
                <ScrollLink to="contact">Get In Touch</ScrollLink>
            </div>
        </div>

    );
}