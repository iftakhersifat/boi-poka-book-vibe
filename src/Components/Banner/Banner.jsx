import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around items-center mt-12 mb-12 bg-gray-200 h-[400px] p-4 rounded-xl container mx-auto'>
            <div>
                <h1 className='font-bold text-4xl mb-3'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] mt-3 text-white rounded-lg px-4 py-4 font-bold'>View The List</button>
            </div>
            <div>
                <img className='w-[400px] rounded-2xl' src="/assets/books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;