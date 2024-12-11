import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { FaCoffee, FaMobileAlt } from "react-icons/fa";
import { FaCode, FaLaptop, FaPaperPlane, FaRegClock, FaRocket, FaTrophy, FaTwitter } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect } from "react";

const store = (set) => ({

    // --------------links-start--------------

    links: [
        { to: 'home', label: 'HOME' },
        { to: 'intro', label: 'INTRO' },
        { to: 'about', label: 'ABOUT' },
        { to: 'services', label: 'SERVICES' },
        { to: 'history', label: 'HISTORY' },
        { to: 'works', label: 'WORKS' },
        { to: 'contact', label: 'CONTACT' }
    ],

    // --------------links-end--------------

    // --------------about-start--------------

    goals: [
        { id: uuidv4(), title: 'web design', text: 'Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience', icon: <FaLaptop /> },
        { id: uuidv4(), title: 'Web development', text: 'The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.', icon: <FaCode /> },
        { id: uuidv4(), title: 'Seo optimization', text: 'Go farther than you thought you could. With us you can go farther then ever before. Be in top results of searches.', icon: <IoSearchSharp /> },
        { id: uuidv4(), title: 'Social Media', text: "It's important to keep your brand consistent and recognizable across all platforms", icon: <FaTwitter /> },
    ],
    skills: [
        { id: uuidv4(), title: 'Web development', data: 100 },
        { id: uuidv4(), title: 'Web design', data: 90 },
        { id: uuidv4(), title: 'Mobile Development', data: 95 },
        { id: uuidv4(), title: 'SEO optimization', data: 100 },
        { id: uuidv4(), title: 'Social Media', data: 90 },
    ],
    counters: [
        { id: uuidv4(), icon: <FaRocket />, count: 167, title: 'Projects Launched' },
        { id: uuidv4(), icon: <FaTrophy />, count: 3, title: 'Awards won' },
        { id: uuidv4(), icon: <FaPaperPlane />, count: 98, title: 'Proposals Sent' },
        { id: uuidv4(), icon: <FaRegClock />, count: 68, title: 'Hours of work' },
        { id: uuidv4(), icon: <FaCoffee />, count: 102, title: 'Cups of coffee' },
    ],

    // --------------about-end--------------

    // --------------services-start--------------
    servicesObj: [
        { id: uuidv4(), title: 'Web Development', text: 'Once we have come up with a unique design and have finalized the textures and graphics to be added, the next step is to make it all come together. And that is what we aim to achieve at our web development agency India. Only a professionally designed website can justify the uniqueness of your idea and this is a fact clearly understood by our team.', subtext: 'While a good design can impress the users, it is the codes and development process that ensures that your target users will find the browsing experience equally amazing as your design.', img: '../assets/img/web-development.jpg', pagination: { id: uuidv4(), icon: <FaCode />, }, },
        { id: uuidv4(), title: 'Mobile Development', text: 'With an increasing importance being given to smart phones, and mobile apps, it has become immensely important to include app development as part of web design services. Our team is known to provide excellent and extraordinary apps that are unique in every way. All the apps developed by our team are based on providing interesting features combined with enhanced functionality. With a mobile app in place, you can increase the reach of your brand and broaden its horizons too. You can have an easy to use professional app created that provides ease of functionality and an amazing appeal.', img: '../assets/img/mobile-development.jpg', pagination: { id: uuidv4(), icon: <FaMobileAlt />, }, },
        { id: uuidv4(), title: 'Web Design', text: 'Decorations don’t drive home messages. Content does. Reducing text-based content to a visual design element (the shape of the text) can result in bloated and unrealistic client expectations once real data replaces the dummy content. We allow our design decisions to be dictated by the on-page content and messaging, and often our designers use the actual content to inspire interesting elements that might not have been conceived without it', img: '../assets/img/web-design.jpg', pagination: { id: uuidv4(), icon: <FaLaptop />, }, },
        { id: uuidv4(), title: 'SEO optimization', text: 'Search engine optimization (SEO) is the process of improving the visibility of a web site in search engines. Consumer puts a lot of trust in search engines to find what they need. Google receives 34,000 searches per second. Those searches involve finding products, reviewing brands, and looking up business locations.', img: '../assets/img/seo-optimization.jpg', pagination: { id: uuidv4(), icon: <IoSearchSharp />, }, },
        { id: uuidv4(), title: 'Social Media', text: 'Social Media, has become an essential tool of marketing an online business. It gives you a platform to interact and inform people about yourself and your brand. The concept of social media basically refers to the task of promoting websites or business through social media platforms..', img: '../assets/img/social-media.jpg', pagination: { id: uuidv4(), icon: <FaTwitter />, }, }
    ],

    reviewObj: [
        { id: uuidv4(), logo: '../assets/img/Svetlanova2.jpg', review: 'I want to express my gratitude for the high-quality work on the responsive design of our website.  The responsive design was executed at a very high level, and now the website displays perfectly across various devices: mobile phones, tablets, and desktop computers. All interface elements are properly adapted, and all requested changes were promptly addressed and implemented.', name: 'Svetla_nova', proficiency: 'Web Designer' },
        { id: uuidv4(), logo: '../assets/img/wizard.jpg', review: 'I provided the layout for the coding. It was supposed to take about a week and a half. The order was completed in 4 days, and at a good price for me. The developer is always available and responds quickly. I’m very pleased with the work as everything was done neatly. I plan to give him more work in the future.', name: 'Wizard', proficiency: 'IT Company' },
        { id: uuidv4(), logo: '/assets/img/Lev.jpg', review: 'Excellent work, everything was as ordered. I’ll be ordering again and highly recommend it to everyone!', name: 'Lev Kazaryan', proficiency: 'Businessman in Indonesia.' },
    ],


    // --------------services-end--------------

    // --------------works-start--------------

    portfolio: {
        webDevelopment: {
            id: uuidv4(),
            title: 'Web Development',
            projects: [
                {
                    id: uuidv4(),
                    subtitle: 'Web Development',
                    img: '../assets/img/portfolio-8.jpg',
                    projectTitle: 'Agat',
                    about: 'I developed a highly functional and visually appealing contact page for the Agat website. This page enhances user experience by integrating interactive features and ensuring seamless communication between users and the business.',
                    link: 'https://alexelaryan.github.io/agat/contact',
                },
                {
                    id: uuidv4(),
                    subtitle: 'Website',
                    img: '../assets/img/portfolio-1.jpg',
                    projectTitle: 'Magenta',
                    about: 'I designed and developed a stylish and modern website for "Magenta," a Russian beauty salon, showcasing their services and creating an engaging online presence to attract new clients. The website reflects the elegance and sophistication of the salon`s brand.',
                    link: 'https://alexelaryan.github.io/Magenta/',
                },
                {
                    id: uuidv4(),
                    subtitle: 'Website',
                    img: '../assets/img/portfolio-5.jpg',
                    projectTitle: 'Lev',
                    about: 'I developed a modern and functional webpage designed for an Israeli business, featuring an intuitive and efficient online booking system. This project combines usability, aesthetics, and functionality to meet the client`s specific needs.',
                    link: 'https://alexelaryan.github.io/book/',
                },
                {
                    id: uuidv4(),
                    subtitle: 'Layout',
                    img: '../assets/img/portfolio-7.jpg',
                    projectTitle: 'Medical Center',
                    about: 'I created a responsive and visually appealing layout for a medical center`s website. The design focuses on user-friendliness and accessibility, ensuring patients can easily find the information they need.',
                    link: 'https://alexelaryan.github.io/med/',
                },
            ],
        },
        webDesign: {
            id: uuidv4(),
            title: 'Web Design',
            projects: [
                {
                    id: uuidv4(),
                    subtitle: 'Figma Prototype',
                    img: '../assets/img/portfolio-2.jpg',
                    projectTitle: 'Coming Soon',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique.',
                    link: '',
                },
                {
                    id: uuidv4(),
                    subtitle: 'Figma Prototype',
                    img: '../assets/img/portfolio-3.jpg',
                    projectTitle: 'Coming Soon',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique.',
                    link: '',

                },
            ],
        },
        mobileApps: {
            id: uuidv4(),
            title: 'Mobile App',
            projects: [
                {
                    id: uuidv4(),
                    subtitle: 'IOS App',
                    img: '../assets/img/portfolio-4.jpg',
                    projectTitle: 'COMING SOON',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique.',
                    link: '',
                },
                {
                    id: uuidv4(),
                    subtitle: 'Android App',
                    img: '../assets/img/portfolio-6.jpg',
                    projectTitle: 'COMING SOON',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique.',
                    link: '',
                },
            ],
        },
    },
    result: null,
    activeCategory: 'All',
    selectedProject: null,
    setSelectedProject: (value) => set((state) => ({ selectedProject: value })),

    // --------------works-end--------------

    // --------------history-start--------------

    timeline: [
        {
            id: uuidv4(),
            year: 2023,
            time: '18 Jan',
            position: 'Graduate',
            information: 'Graduated from Elbakyan Educational Complex, where I studied React.js, JavaScript, HTML, and CSS.',
            picture: '../assets/img/certificate.jpg'
        },
        {
            id: uuidv4(),
            year: 2024,
            time: 'Today',
            position: 'Freelancer',
            information: 'Specialized in the design and development of user-friendly and aesthetically appealing web pages, providing freelance services to various clients.',
            picture: '../assets/img/timeline-img.jpg'
        },
    ],

    // --------------history-end--------------

    animItems: false,
    setAnimItems: (value) => set((state) => ({ animItems: value })),
});


export const useStore = create((set, get) => ({
    ...store(set),

    // --------------works-start--------------

    result: store(set).portfolio,
    
    
    sort: (val) => {
        set((state) => ({
            activeCategory: val,
            animItems: true,
            result: val === 'All'
                ? state.portfolio
                : Object.fromEntries(Object.entries(state.portfolio).filter(([key, category]) => category.title === val)),
        }));
    
    },

    openModal: (id) => {
        const result = get().result;
        Object.entries(result).forEach(([key, category]) => {
            category.projects.forEach((el) => {
                if (el.id === id) {
                    set((state) => ({ selectedProject: el }));
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    },
    closeModal: () => {
        document.body.style.overflow = 'auto';
        set((state) => ({ selectedProject: null }));
    },

    // --------------works-end--------------

    useIntersectionObserver: (refsArray, visibilityState, setVisibilityState, onVisibleAction) => {
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !visibilityState) {
                            setVisibilityState(true);
                            onVisibleAction(); // Call the respective action when visible
                        }
                    });
                },
                {
                    root: null,
                    threshold: 0.1,
                }
            );

            refsArray.current.forEach((ref) => {
                if (ref.current) {
                    observer.observe(ref.current);

                }
            });


            return () => {
                refsArray.current.forEach((ref) => {
                    if (ref.current) {
                        observer.unobserve(ref.current);

                    }
                });
            };
        }, [visibilityState, refsArray, setVisibilityState, onVisibleAction]);
    }

}));