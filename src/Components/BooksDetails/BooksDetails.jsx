import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BooksDetails = () => {
    const {id} =useParams();
    const bookId =parseInt(id)
    const details =useLoaderData();
    // console.log(details)
    const bookDetails = details.find(book => book.bookId === bookId);
    const {bookName, image, author, review, tags} =bookDetails
    return (
        <div className='container mx-auto mt-8 mb-8 flex justify-between gap-8'>
            <div className='bg-gray-200 rounded-lg h-[700px] w-[50%] flex justify-center items-center'>
                <img className='w-[450px]  p-4' src={image} alt="" />
            </div>

            <div className='w-[50%]'>
            <h1 className='font-bold text-4xl mb-4'>{bookName}</h1>
            <p className="mb-4 text-xl text-gray-500 font-bold">By : {author}</p>
            <p className='border-b-1 border-gray-400'></p>
            <h3 className='mb-4 mt-4'>Fiction</h3>
            <p className='border-b-1 border-gray-400'></p>
            <h1 className='font-bold mt-4 mb-4'>Review : <span className='text-gray-500'>{review}</span></h1>
            <h1 className='flex gap-6 font-bold'>Tags <div className='flex space-x-12'>
                {
                    tags.map((tag, index)=> <p key={index} className='font-bold gap-8 text-[#23BE0A] bg-green-50 rounded-xl px-3'>#{tag}</p>)
                }
            </div></h1>
            <p className='border-b-1 border-gray-400 mt-4 mb-4'></p>
            </div>
        </div>
    );
};

export default BooksDetails;