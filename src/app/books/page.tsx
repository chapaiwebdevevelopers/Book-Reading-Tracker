import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";


const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="bg-base-100 py-16 md:py-20">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          {/* Small Label */}
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            Our Library 
            </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Discover Your Next Great Read
          </h2>

          {/* Description */}
          <p className="text-base-content/60 mt-4 text-base md:text-lg leading-relaxed">
            From bestselling novels to unforgettable classics, our collection has something for every reader. Browse our handpicked selection and find a book you'll love.
          </p>

        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {books.map((book:IBook) => (
            <BookCard
              key={book.bookId}
              book={book}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Books;