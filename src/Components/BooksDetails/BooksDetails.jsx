import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { addBook } from '../Utility/utility';
import { Star } from 'lucide-react';

const BooksDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);

    const bookDetails = details.find(book => book.bookId === bookId);

    if (!bookDetails) {
        return <p className="text-center mt-20 text-2xl font-bold">Loading book details...</p>;
    }


    const handelRead=(id)=>{
        addBook(id)
    }

    const { bookName, image, author, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookDetails;

    return (
        <div className='container mx-auto mt-8 mb-8 md:flex justify-between gap-8 p-4 md:p-0'>
            <div className='bg-gray-200 rounded-lg lg:h-[700px] md:h-[865px] md:w-[50%] flex justify-center items-center'>
                <img className='w-[450px] p-4' src={image} alt={bookName} />
            </div>

            <div className='md:w-[50%] p-4 md:p-0'>
                <h1 className='font-bold text-4xl mb-4'>{bookName}</h1>
                <p className="mb-4 text-xl text-gray-500 font-bold">By : {author}</p>
                <div className='border-b-2 border-gray-400 my-4'></div>
                <h3 className='mb-4'>Fiction</h3>
                <div className='border-b-2 border-gray-400 my-4'></div>
                <h1 className='font-bold mt-4 mb-4'>Review : <span className='text-gray-500'>{review}</span></h1>

                <h1 className='flex gap-6 font-bold mb-4'>
                    Tags :
                    <div className='flex space-x-3'>
                        {tags.map((tag, index) => (
                            <p key={index} className='font-bold text-[#23BE0A] bg-green-50 rounded-xl px-3'>#{tag}</p>
                        ))}
                    </div>
                </h1>

                <div className='border-b-2 border-gray-400 my-4'></div>

                {/* Table */}
                <table className="w-full text-left">
                    <tbody>
                        <tr>
                            <td className="text-gray-500 font-semibold py-2">Number of Pages</td>
                            <td className="font-bold text-black py-2">{totalPages}</td>
                        </tr>
                        <tr>
                            <td className="text-gray-500 font-semibold py-2">Publisher</td>
                            <td className="font-bold text-black py-2">{publisher}</td>
                        </tr>
                        <tr>
                            <td className="text-gray-500 font-semibold py-2">Year Of Publishing</td>
                            <td className="font-bold text-black py-2">{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="text-gray-500 font-semibold py-2">Ratings</td>
                            <td className="font-bold text-black py-2 flex gap-2">{rating} <Star size={20}></Star></td>
                        </tr>
                    </tbody>
                </table>

                <div className='mt-9'>
                    <button onClick={()=>handelRead(id)} className="btn bg-white text-black rounded-lg mr-6 px-7 py-7">Read</button>
                    <button className="btn bg-[#59C6D2] text-white rounded-lg px-7 py-7">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;
