import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex md:justify-around items-center mt-12 mb-12 bg-gray-200 md:h-[400px] p-4 rounded-xl container mx-auto'>
            <div className='p-9 md:hidden'>
                <img className='md:w-[400px] w-[300px] rounded-2xl' src="/assets/books.jpg" alt="" />
            </div>
            <div className='p-9 md:p-0'>
                <h1 className='font-bold lg:text-4xl md:text-3xl text-3xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] mt-3 text-white rounded-lg px-4 py-4 font-bold'>View The List</button>
            </div>
            <div className='md:flex hidden'>
                <img className='lg:w-[400px] md:w-[300px] rounded-2xl' src="/assets/books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;