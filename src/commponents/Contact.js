import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useStore } from "../store";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Swal from 'sweetalert2'


export default function Contact() {

    const links = useStore((store) => store.links);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e69c43f5-dd91-4287-af78-5812642b3b38");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return (
        <div id="contact" className="w-full py-[60px]">
            <div className="section-subtitle">
                <h2 className="title">CONTACT Alex</h2>
                <h3 className="subtitle">Here i am</h3>
            </div>
            <div className="w-full site-section contactParent">
                <form onSubmit={onSubmit} className="contact">
                    <div>
                        <input className="form-control" placeholder="Name" type="text" name="name" required />
                        <input className="form-control" placeholder="Email" type="email" name="email" required />
                        <input className="form-control" placeholder="Subject" type="text" name="subject" required />
                    </div>
                    <textarea className="form-control" placeholder="Your Message" name="message" required />
                    <button type="submit">send message</button>
                </form>
            </div>

            <div className="section-network w-full py-[30px] bg-[#196fc2] flex justify-center items-center gap-1">
                <RouterLink className="rectangle" to={'https://www.instagram.com/alexelaryan_/'} aria-label="Instagram" target="_">
                    <GrInstagram />
                </RouterLink>
                <RouterLink className="rectangle" to={'https://www.linkedin.com/in/alex-elaryan-2398642b3/'} aria-label="LinkedIn" target="_">
                    <FaLinkedinIn />
                </RouterLink>
            </div>

            <nav className="footer-nav w-full py-[70px] px-[15px] border-solid border-b-[1px] border-[#dddddd] relative">
                <ul className="flex items-center justify-center flex-wrap">
                    {links.map((el, i) => (
                        <li key={i} className="px-[10px]">
                            <ScrollLink to={el.to}>
                                {el.label}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                <ScrollLink to="home" className="rectangle footer-scroll-top">
                    <MdKeyboardDoubleArrowUp />
                </ScrollLink>
            </nav>

            <div className="foot pt-[70px] flex justify-center">
                <p>© <RouterLink>Portfolio</RouterLink> alexelaryan</p>
            </div>
        </div>
    );
}