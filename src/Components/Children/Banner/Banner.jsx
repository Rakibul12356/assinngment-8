import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-base-200 rounded-2xl py-20 px-5 md:px-32">
            <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
                <img src="https://i.ibb.co/PMppq2n/pngwing-1.png" className="md:w-2/6 rounded-lg" />
                <div className="space-y-6">
                    <h1 className="text-6xl font-playfair leading-snug font-bold">Books to freshen up your bookshelf</h1>
                    <NavLink to={'/listed-book'}><button className="btn bg-[#23BE0A] text-white font-bold hover:text-[#23BE0A]">View The List</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;