import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/books.type";

interface BookCardProps {
  book: IBook;
}

const ListedBookCard = ({ book }: BookCardProps) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

      <div className="flex flex-col md:flex-row">

        {/* ================= LEFT SIDE - IMAGE ================= */}
        <div className=" md:w-1/4">

          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={500}
            className="w-full h-80 md:h-full object-cover"
          />

        </div>

        {/* ================= RIGHT SIDE - CONTENT ================= */}
        <div className="w-full md:w-3/4 p-6 flex flex-col items-center">

          {/* Book Name */}
          <h2 className="text-2xl font-bold text-gray-800">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-gray-500 mt-2">
            <span className="font-semibold">
              Author:
            </span>{" "}
            {book.author}
          </p>

          {/* Category & Rating */}
          <div className="flex gap-2 mt-4">

            <span className="badge badge-primary">
              {book.category}
            </span>

            <span className="badge badge-warning">
              ⭐ {book.rating}
            </span>

          </div>

          {/* Review */}
          <p className="text-gray-600 leading-7 mt-5">
            {book.review}
          </p>

          {/* View Details Button */}
          <div className="mt-6">

            <Link
              href={`/books/${book.bookId}`}
              className="btn btn-primary"
            >
              View Details
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ListedBookCard;