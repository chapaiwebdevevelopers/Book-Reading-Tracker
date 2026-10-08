import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
interface IbookCardProps{
    book:IBook;
}

const BookCard = ({ book }:IbookCardProps) => {
  const {bookId,bookName,author,image,category,rating,publisher,totalPages,yearOfPublishing,tags,} = book;

  return (
    <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-shadow duration-300 p-3">
      
      {/* Image */}
      <figure className="bg-base-200 p-5">
        <Image
          src={image}
          alt={bookName}
          width={300}
          height={600}
          className="h-64 w-full object-contain"
        />
      </figure>

      {/* Content */}
      <div className="card-body">

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag, index) => (
            <span key={index} className="badge badge-primary badge-outline">
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="card-title text-xl">
          {bookName}
        </h2>

        {/* Author */}
        <p className="text-sm text-base-content/70">
          By <span className="font-medium">{author}</span>
        </p>

          {/* Category and Rating  */}
          <div className="flex border-t-1 border-gray-200 border-dashed py-5">
        {/* Category */}
        <p className="text-sm">
          <span className="font-semibold">{category}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="rating rating-sm">
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
          </div>

          <span className="font-semibold">
            {rating}
          </span>
        </div>
          </div>


        {/* Book Information */}
        {/* <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div>
            <span className="text-base-content/60">Pages</span>
            <p className="font-semibold">{totalPages}</p>
          </div>

          <div>
            <span className="text-base-content/60">Published</span>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>

          <div className="col-span-2">
            <span className="text-base-content/60">Publisher</span>
            <p className="font-semibold">{publisher}</p>
          </div>
        </div> */}

        {/* Button */}
        <div className="card-actions mt-4">
            <Link href={`/books/${bookId}`}>
            <button className="btn btn-primary w-full">
            View Details
          </button>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default BookCard;