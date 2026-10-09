'use client';

import ListedBookCard from '@/components/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import {  useContext, useState } from 'react';

const ListWishListBooks = () => {
  const { wishList, readBooks } = useContext(BooksContext);

 const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>();
// console.log(sortBy);
    const sortbooks = (books: IBook[]): IBook[] => {
            const sortedBooks = [...books];
            if (sortBy === 'rating') {
                sortedBooks.sort((a, b) => b.rating - a.rating);
            } else if (sortBy === 'pages') {
                sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
            } else if (sortBy === 'year') {
                sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            }
            return sortedBooks;
    }

    const sortedReadBooks = sortbooks(readBooks);
    const sortedWishList = sortbooks(wishList);



  return (
    <div className="container mx-auto">
      <div className="py-10 bg-gray-100 items-center text-center text-4xl rounded-2xl my-10">
        <h1>Books</h1>
      </div>

      <div className="text-center">
        <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
          className="select select-success"
        >
          <option value='' disabled={true}>Sort By</option>
          <option value="rating">Rating</option>
          <option value="year">Published year</option>
          <option value="pages">Number of pages</option>
        </select>
      </div>

      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="my_tabs_4" defaultChecked />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>

          ReadList : {readBooks.length}
        </label>

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 gap-6">
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book: IBook) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))
            ) : (
              <p>No book Found</p>
            )}
          </div>
        </div>

        <label className="tab">
          <input type="radio" name="my_tabs_4" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          Wishlist : {wishList.length}
        </label>

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 gap-6">
            {sortedWishList.length > 0 ? (
              sortedWishList.map((book: IBook) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))
            ) : (
              <p>No book found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListWishListBooks;