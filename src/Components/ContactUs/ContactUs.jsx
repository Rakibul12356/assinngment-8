import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";



const ContactUs = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                <div className="mb-16 md:mb-0">
                    <h1 className="font-playfair text-xl font-semibold mb-9 text-[#23BE0A]">Location:</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.6924616325487!2d90.20545717922236!3d23.62428415121031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755911f63b72e79%3A0xaf6326805bdfe10e!2sGalimpur%20Bazar%2C%20Nawabganj!5e0!3m2!1sen!2sbd!4v1711632756655!5m2!1sen!2sbd" className="w-full h-full shadow-slate-400 shadow-xl rounded-2xl" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="font-work-sans">
                    <h1 className="font-playfair text-5xl font-semibold mb-3 text-[#23BE0A]">Contact Info:</h1>
                    <p className="text-lg">BookVibe.com</p>
                    <p className="text-lg mt-8"><span className="font-bold">Phone: </span>+8801888799909</p>
                    <p className="text-lg my-2"><span className="font-bold">Email: </span>info@bookvibe.com</p>
                    <p className="text-lg"><span className="font-bold">Address: </span>Galimpur Bazar, Nawabganj, Dhaka</p>
                    <h1 className="font-playfair text-xl font-semibold text-center mt-10 mb-5 text-[#23BE0A]">Sacial Networking</h1>
                    <div className="flex space-x-10 text-4xl text-gray-500 justify-center">
                        <Link>
                            <FaFacebook />
                        </Link>
                        <Link>
                            <FaTwitter />
                        </Link>
                        <Link>
                            <FaLinkedin />
                        </Link>
                        <Link>
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
