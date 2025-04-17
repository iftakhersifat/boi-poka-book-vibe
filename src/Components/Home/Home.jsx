import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Home = () => {
    const booksData = useLoaderData();
    console.log(booksData)
    return (
        <div className=''>
            <Banner></Banner>
            <h1 className='text-[28px] font-bold text-center mb-8'>Books</h1>
            <div className='grid grid-cols-3 mb-10 px-22'>
                {
                    booksData.map(data=><Book key={data.bookId} data={data}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;