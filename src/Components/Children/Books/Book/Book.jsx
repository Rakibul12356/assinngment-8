import { NavLink } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Tag from "./Tag/Tag";


const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    // console.log(book);
    return (
        <div className="h-full">
            <NavLink to={`/book-details/${bookId}`}>
                <div className="card bg-base-100 shadow-xl p-6 border skeleton my-auto h-full">
                    <figure className="bg-gray-100 rounded-3xl p-14"><img className="drop-shadow-2xl h-52" src={image} alt="Shoes" /></figure>
                    <div className="space-y-5 mt-6">
                        <div className="space-y-4">
                            <div className="flex space-x-4 md:flex-wrap">
                                {
                                    tags.map((tag, idX) => <Tag key={idX} tag={tag}></Tag>)
                                }
                            </div>
                            <h2 className="card-title font-bold text-2xl font-playfair text-black">
                                {bookName}
                            </h2>
                            <p className="font-work-sans text-base font-medium">By: {author}</p>
                        </div>
                        <div className="card-actions justify-between border-t-2 border-dashed font-work-sans text-base font-medium items-center pt-5">
                            <div className="">{category}</div>
                            <div className="flex items-center gap-2">
                                <p className="mt-1">{rating}</p>
                                <div>
                                    <CiStar className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Book;