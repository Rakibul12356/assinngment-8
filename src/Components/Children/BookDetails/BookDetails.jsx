import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../Books/Book/Tag/Tag";
import { saveItemInLocalStorage } from "../../../Utility/utility";
import { whishedLocalStorage } from "../../../Utility/wishedList";
import { toast } from "react-toastify";

const BookDetails = () => {
    const books = useLoaderData();
    const Id = useParams();
    const bookIntId = parseInt(Id.bookId);
    const firstData = books.find(book => book.bookId === bookIntId);

    const [buttonClicked, setButtonClicked] = useState(false);
    const [buttonWished, setButtonWished] = useState(false);

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = firstData;

    const handleReadingList = (arg) => {
        if (arg === 'read') {
            saveItemInLocalStorage(bookIntId);
            setButtonClicked(true);
        }
        else if (arg === 'wishlist') {
            if (!buttonClicked) {
                whishedLocalStorage(bookIntId);
                setButtonWished(true);
            }
            else if (buttonWished) {
                return toast.error('This book already added in whished list');
            }
            else if (buttonClicked) {
                return toast.error('You already added this in read');
            }
        }
    }

    // console.log(firstData);
    return (
        <div className="grid grid-col-1 lg:grid-cols-2 bg-base-100 container mx-auto gap-12 mb-24 p-5">
            <div className="p-20 bg-gray-100 rounded-2xl border flex justify-center"><img className=" shadow-slate-950 shadow-2xl" src={image} alt="Movie" /></div>
            <div className="">
                <div>
                    <h2 className="mb-4 card-title font-playfair text-5xl font-bold">{bookName}</h2>
                    <p className="mb-6 text-xl font-medium font-work-sans">By: {author}</p>
                    <hr />
                    <p className="my-6 font-work-sans text-xl font-normal">{category}</p>
                    <hr />
                    <p className="my-6 text-base leading-loose"><span className="font-bold">Review: </span>{review}</p>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                    <p className="inline-block text-base font-extrabold font-work-sans">Tag: </p>
                    <div className="flex space-x-4">
                        {
                            tags.map((item, idX) => <Tag key={idX} tag={item}></Tag>)
                        }
                    </div>
                </div>
                <hr />
                <div className="mt-6 mb-9">
                    <table className="text-base font-work-sans">
                        <tbody>
                            <tr>
                                <td className="text-gray-500 font-normal pr-16 py-2">Number of Pages:</td>
                                <td className="text-black font-semibold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="text-gray-500 font-normal pr-16 py-2">Publisher:</td>
                                <td className="text-black font-semibold">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="text-gray-500 font-normal pr-16 py-2">Year of Publishing:</td>
                                <td className="text-black font-semibold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="text-gray-500 font-normal pr-16 py-2">Rating:</td>
                                <td className="text-black font-semibold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="space-x-7">
                    <button onClick={() => handleReadingList('read')} className="btn text-black bg-transparent border border-black hover:bg-[#23BE0A] hover:text-white px-7">Read</button>
                    <button onClick={() => handleReadingList('wishlist')} className="bg-[#59C6D2] btn text-white hover:text-[#59C6D2] px-7">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;