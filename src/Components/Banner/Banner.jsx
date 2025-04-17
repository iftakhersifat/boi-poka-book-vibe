import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around items-center mt-12 mb-12 bg-gray-200 h-[600px] p-4 rounded-xl container mx-auto'>
            <div>
                <h1 className='font-bold text-6xl mb-5'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] mt-5 text-white rounded-lg px-8 py-8 font-bold'>View The List</button>
            </div>
            <div>
                <img className='w-[600px] rounded-2xl' src="/assets/books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;