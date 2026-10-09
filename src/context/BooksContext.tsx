'use client';

import React, { createContext, useState } from 'react';
import { IBook } from '@/types/books.type';

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishList: IBook[];
  setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType>({
  readBooks: [],
  setReadBooks: () => undefined,
  wishList: [],
  setWishList: () => undefined,
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishList, setWishList] = useState<IBook[]>([]);

  const profileBooks: BooksContextType = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return <BooksContext.Provider value={profileBooks}>{children}</BooksContext.Provider>;
};

export default BooksProvider;