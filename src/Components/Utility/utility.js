const getBook =()=>{
    const getBooks = localStorage.getItem('read');
    if(getBooks){
        const stored = JSON.parse(getBooks);
        return stored;
    }
    else{
        return [];
    }
}

const addBook = id =>{
    const book  = getBook();
    if(book.includes(id)){
        alert("already exits");
    }
    else{
        book.push(id);
        const data =JSON.stringify(book);
        localStorage.setItem("read", data)
    }
}
export {addBook, getBook}