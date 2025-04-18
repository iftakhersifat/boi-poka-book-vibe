import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({data}) => {
    const {image, bookName, author, tags, rating,bookId} = data;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 lg:w-96 md:w-88 shadow-sm container mx-auto">
  <div className='p-4 rounded-lg'>
  <figure className='bg-gray-200 h-[240px] p-2'>
    <img className='w-[140px] h-[140px] rounded-lg' src={image} alt="" />
  </figure>
  </div>
  
  <div className="card-body">
  <div className='flex text-[#23BE0A] mb-4 space-x-3'>
    {
        tags.map((tag, index)=><p className='bg-green-50 rounded-lg p-3' key={index}>{tag}</p>)
    }
  </div>
    <h2 className="card-title">{bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By : {author}</p>
    <div className='border-t-1 border-dashed border-gray-400'></div>
    <div className="flex justify-between">
      <div className="">Fiction</div>
      <div className="flex gap-2">{rating} <Star size={20}></Star></div>
    </div>
  </div>
</div></Link>
    );
};

export default Book;