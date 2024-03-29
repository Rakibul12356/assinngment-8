import Tag from '../../Books/Book/Tag/Tag'
import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const ReadBook = ({ read }) => {
    const { bookId, image, bookName, author, publisher, yearOfPublishing, totalPages, category, rating, tags } = read;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 bg-base-100 p-6 gap-6 items-center rounded-2xl border border-gray-200">
            <figure className="p-10 bg-gray-200 rounded-2xl flex justify-center"><img src={image} alt="Movie" /></figure>
            <div className="lg:col-span-3">
                <h2 className="card-title font-playfair font-bold text-2xl text-[#131313] mb-4">{bookName}</h2>
                <p className='font-work-sans font-medium text-base mb-6'>By: {author}</p>
                <div className='flex flex-col space-y-6 mb-5'>

                    <div className="flex flex-wrap space-y-2 items-center space-x-4 font-work-sans">
                        <h1 className='font-bold text-base'>Tag</h1>
                        {
                            tags.map((tag, idX) => <Tag key={idX} tag={tag}></Tag>)
                        }
                        <div className='flex items-center space-x-2 text-base font-normal text-gray-600'>
                            <GrLocation />
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap font-work-sans space-x-4'>
                        <div className='flex space-x-2 items-center text-base font-normal'>
                            <GoPeople />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className='flex space-x-2 items-center text-base font-normal'>
                            <FiFileText />
                            <p>Pages: {totalPages}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap space-y-2 items-center space-x-4 border-t-2 pt-6">
                    <button className='text-center text-[#328EFF] bg-[#328eff21] rounded-3xl py-2 px-4 text-base font-medium font-work-sans'>Category: {category}</button>
                    <button className='text-center text-[#FFAC33] bg-[#ffad331a] rounded-3xl py-2 px-4 text-base font-medium font-work-sans'>Rating: {rating}</button>
                    <button className="btn text-center text-white bg-[#23BE0A] rounded-3xl py-2 px-7 text-base font-medium font-work-sans hover:text-[#23BE0A]">
                        <NavLink to={`/book-details/${bookId}`}>View Details</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;