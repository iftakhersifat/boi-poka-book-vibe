import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';

const Home = () => {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        // Manually fetching data
        fetch('booksData.json')
            .then((response) => response.json())
            .then((data) => setBooksData(data));
    }, []);

    // Show loading until data is fetched
    if (booksData.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className=''>
            <Banner />
            <h1 className='text-[28px] font-bold text-center mb-8'>Books</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mb-12 lg:px-22 gap-4 md:px-12'>
                {booksData.map((data) => (
                    <Book key={data.bookId} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Home;
