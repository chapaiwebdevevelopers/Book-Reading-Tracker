'use client'

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";


const WishlishtBtn = ({book}:{book:IBook}) => {
    const {wishList,setWishList} = useContext(BooksContext)
    
const handleWishlist=()=>{
    console.log("clicked")
    setWishList([...wishList,book])
    toast.success(book.bookName+' added to Wishlist')
}
// console.log("Wishlisht",wishList)
    return (
            <button onClick={()=>handleWishlist()} className="btn btn-primary flex-1">
                ❤️ Add to Wishlist
              </button>
    );
};

export default WishlishtBtn;