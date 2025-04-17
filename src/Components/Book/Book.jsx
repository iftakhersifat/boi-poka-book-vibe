import React from 'react';

const Book = ({data}) => {
    const {image, bookName, author, tags, rating} = data;
    return (
        <div className="card bg-base-100 w-96 shadow-sm container mx-auto">
  <figure className='bg-gray-200 h-[240px] p-2'>
    <img className='w-[140px] h-[140px] rounded-lg' src={image} alt="" />
  </figure>
  <div className="card-body">
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