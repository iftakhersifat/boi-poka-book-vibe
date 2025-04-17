import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();
    console.log(booksData)
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-[28px] font-bold text-center mb-8'>Books</h1>
        </div>
    );
};

export default Home;