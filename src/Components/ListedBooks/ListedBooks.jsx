import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBook } from '../Utility/utility';
import Book from '../Book/Book';
import { getWishlist } from '../Utility/Wishlist';

const ListedBooks = () => {
  const [read, setRead]=useState([]);

  const [Wishlist, setWishlist]=useState([]);

  const useData = useLoaderData();
  // console.log(useData);
  useEffect(()=>{
    const storeBook = getBook();
    // console.log(storeBook)
    const showBook = storeBook.map(id=>parseInt(id));
    console.log(showBook)
    const readList = useData.filter(book=>showBook.includes(book.bookId));
    setRead(readList);


    // for wishlist
    const storeList =getWishlist();
    const convertWishList = storeList.map(id=>parseInt(id));
    const wishList = useData.filter(list=>convertWishList.includes(list.bookId));
    setWishlist(wishList);
  },[])
    return (
       <div className='container mx-auto mt-8 mb-8 p-4 md:p-0'>
         <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Read Books {read.length}</h2>
      <div className='mt-4'>
      {
        read.map(b=><Book key={b.bookId} data={b}></Book>)
      }
      </div>
    </TabPanel>

    <TabPanel>
      <h2>Wishlist Books {Wishlist.length}</h2>
      <div>
        {
          Wishlist.map(l=><Book key={l.bookId} data={l}></Book>)
        }
      </div>
    </TabPanel>
  </Tabs>
       </div>
    );
};

export default ListedBooks;