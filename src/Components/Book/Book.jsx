import React from 'react';

const Book = ({data}) => {
    const {image, bookName, author, tags, rating} = data;
    return (
        <div className="card bg-base-100 w-96 shadow-sm container mx-auto">
  <div className='p-4 rounded-lg'>
  <figure className='bg-gray-200 h-[240px] p-2'>
    <img className='w-[140px] h-[140px] rounded-lg' src={image} alt="" />
  </figure>
  </div>
  
  <div className="card-body">
  <div className='flex text-[#23BE0A] mb-4 space-x-3'>
    {
        tags.map(tag=><p className='bg-green-50 rounded-lg p-3'>{tag}</p>)
    }
  </div>
    <h2 className="card-title">{bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By : {author}</p>
    <div className='border-t-1 border-dashed border-gray-400'></div>
    <div className="flex justify-between">
      <div className="">Fiction</div>
      <div className="">{rating}</div>
    </div>
  </div>
</div>
    );
};

export default Book;