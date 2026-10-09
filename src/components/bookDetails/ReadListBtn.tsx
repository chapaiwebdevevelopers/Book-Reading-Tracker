'use client'

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";


const ReadListBtn = ({book}:{book:IBook}) => {
    const {readBooks,setReadBooks} = useContext(BooksContext)
    
const handleReadlist=()=>{

    setReadBooks([...readBooks,book])
    toast.success(book.bookName+' added to Readlist')
}
// console.log("Readlisht",readBooks)
    return (
            <button onClick={()=>handleReadlist()} className="btn btn-primary flex-1">
                📚 added to ReadList
              </button>
                           
    );
};

export default ReadListBtn;