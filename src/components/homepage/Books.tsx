import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}//booksData.json`);
    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
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
            Our Collection
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Explore Books
          </h2>

          {/* Description */}
          <p className="text-base-content/60 mt-4 text-base md:text-lg leading-relaxed">
            Discover inspiring stories, timeless classics, and fascinating
            reads from our carefully selected collection of books.
            Find your next favourite book today.
          </p>

        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {books.slice(0,8).map((book: IBook) => (
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