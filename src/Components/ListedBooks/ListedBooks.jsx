import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
       <div className='container mx-auto mt-8 mb-8'>
         <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Read Books</h2>
    </TabPanel>
    <TabPanel>
      <h2>Wishlist Books</h2>
    </TabPanel>
  </Tabs>
       </div>
    );
};

export default ListedBooks;