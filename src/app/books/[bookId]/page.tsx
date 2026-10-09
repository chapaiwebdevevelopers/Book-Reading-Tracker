import ReadListBtn from "@/components/bookDetails/ReadListBtn";
import WishlishtBtn from "@/components/bookDetails/WishlishtBtn";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async () => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}//booksData.json`);
    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const books = await getBooks();
  const { bookId } = await params;

  const book = books.find(
    (book: IBook) => String(book.bookId) === bookId
  );

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Book Not Found</h1>
      </div>
    );
  }

  const {bookId: id,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;

  return (
    <main className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href="/books">Books</Link></li>
            <li>{bookName}</li>
          </ul>
        </div>

        {/* Main Card */}
        <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden">

          {/* Image */}
          <figure className="lg:w-2/5 bg-base-200 p-8 md:p-12">
            <div className="relative">
              <Image
              width={300}
              height={100}
                src={image}
                alt={bookName}
                className="w-full max-w-sm h-[450px] mx-auto object-cover rounded-xl shadow-xl"
              />

              <span className="absolute top-4 left-4 badge badge-primary badge-lg">
                {category}
              </span>
            </div>
          </figure>

          {/* Details */}
          <div className="lg:w-3/5 card-body p-6 md:p-10">

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="badge badge-outline"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              {bookName}
            </h1>

            {/* Author */}
            <p className="text-lg text-base-content/60">
              By{" "}
              <span className="font-semibold text-primary">
                {author}
              </span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3">
              <div className="text-warning text-xl">
                {"★".repeat(Math.round(rating))}
                {"☆".repeat(5 - Math.round(rating))}
              </div>

              <span className="font-bold">
                {rating}/5
              </span>
            </div>

            <div className="divider" />

            {/* Review */}
            <div>
              <h2 className="text-2xl font-bold mb-3">
                About This Book
              </h2>

              <p className="text-base-content/70 leading-7">
                {review}
              </p>
            </div>

            {/* Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-7">

              <div className="bg-base-200 rounded-xl p-4 text-center">
                <div className="text-2xl">📖</div>
                <p className="text-xs text-base-content/50">
                  Pages
                </p>
                <p className="font-bold">
                  {totalPages}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-4 text-center">
                <div className="text-2xl">📅</div>
                <p className="text-xs text-base-content/50">
                  Published
                </p>
                <p className="font-bold">
                  {yearOfPublishing}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-4 text-center">
                <div className="text-2xl">🏢</div>
                <p className="text-xs text-base-content/50">
                  Publisher
                </p>
                <p className="font-bold text-sm">
                  {publisher}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-4 text-center">
                <div className="text-2xl">#</div>
                <p className="text-xs text-base-content/50">
                  Book ID
                </p>
                <p className="font-bold">
                  {id}
                </p>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <WishlishtBtn book={book}></WishlishtBtn>

              <ReadListBtn book={book}></ReadListBtn>

            </div>

            {/* More Information */}
            <div className="collapse collapse-arrow bg-base-200 mt-5">
              <input type="checkbox" />

              <div className="collapse-title font-semibold">
                More Book Information
              </div>

              <div className="collapse-content">
                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span>Author</span>
                    <strong>{author}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Publisher</span>
                    <strong>{publisher}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Category</span>
                    <strong>{category}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Total Pages</span>
                    <strong>{totalPages}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Published Year</span>
                    <strong>{yearOfPublishing}</strong>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Review Section */}
        <section className="mt-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                     Review
                  </h2>
                  <p className="text-base-content/50">
                    What readers think about this book
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-3xl font-bold">
                    {rating}
                  </p>
                  <p className="text-warning">
                    ★★★★★
                  </p>
                </div>
              </div>

              <div className="divider" />

              <p className="leading-7 text-base-content/70">
                {review}
              </p>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default BookDetailsPage;