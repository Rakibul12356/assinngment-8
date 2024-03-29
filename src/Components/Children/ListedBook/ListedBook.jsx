import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { checkLocalStorage } from "../../../Utility/utility";
import { whishedStorage } from "../../../Utility/wishedList";
import ReadBook from "./ReadBook/ReadBook";

const ListedBook = () => {
    const booksAll = useLoaderData();
    const [storeData, setStoreData] = useState([]); // Set initial value as an empty array
    const [wishlist, setWishlist] = useState([]);

    const [selectRead, setSelectRead] = useState([]);
    const [selectWishlist, setSelectWishlist] = useState([]);


    // sorting
    const handleFilter = (filter) => {
        let sortedData = [...storeData]; // Create a copy of the storeData array

        if (filter === 'rating') {
            sortedData.sort((a, b) => b.rating - a.rating);
        } else if (filter === 'numberOfPage') {
            sortedData.sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === 'publisherYear') {
            sortedData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setSelectRead(sortedData); // Update selectRead state with the sorted array
        setSelectWishlist(sortedData)
    };


    // Read List
    useEffect(() => {
        const archiveData = checkLocalStorage();
        if (booksAll.length > 0) {
            const filterBooks = booksAll.filter(book => archiveData.includes(book.bookId));
            setStoreData(filterBooks);
            setSelectRead(filterBooks);
        }
    }, [booksAll]);

    // Whished List
    useEffect(() => {
        const archiveData = whishedStorage();
        if (booksAll.length > 0) {
            const filterBooks = booksAll.filter(book => archiveData.includes(book.bookId));
            setWishlist(filterBooks);
            setSelectWishlist(filterBooks);
        }
    }, [booksAll]);

    // console.log(storeData, wishlist);

    return (
        <div className="container mx-auto">
            <div className="text-center text-3xl font-bold font-work-sans py-9 bg-gray-200 rounded-2xl">
                <h1>Books</h1>
            </div>

            <div className="text-center mt-5">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-lg font-work-sans">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleFilter('numberOfPage')}><a>Number of pages</a></li>
                        <li onClick={() => handleFilter('publisherYear')}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            {/* <NavLink to={'/listed-book/read-book'}>
                <button>Hi</button>
            </NavLink> */}
            <div role="tablist" className="tabs tabs-lifted mt-20">

                <input type="radio" name="my_tabs_2" role="tab" className="tab font-mark-sans font-normal text-xs md:text-lg text-gray-600" aria-label="Read Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 border-x-0 border-b-0">
                    <div className="flex flex-col gap-6">
                        {
                            selectRead.map(read => <ReadBook key={read.bookId} read={read}></ReadBook>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab font-mark-sans font-normal text-xs md:text-lg text-gray-600" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 border-x-0 border-b-0">
                    <div className="flex flex-col gap-6">
                        {
                            selectWishlist.map(read => <ReadBook key={read.bookId} read={read}></ReadBook>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;
