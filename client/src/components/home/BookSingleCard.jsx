import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book, isFavorite, onToggleFavorite, canFavorite }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card-bright px-4 py-3 m-3 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.4),transparent_55%)]" />
      <div className="relative">
        <h2 className="absolute top-2 right-2 px-3 py-1 rounded-full bg-sky-500/90 text-xs font-semibold text-white shadow">
          {book.year}
        </h2>
        <h4 className="my-2 text-xs text-slate-300/80 break-all">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2 mt-1">
          <div className="h-9 w-9 flex items-center justify-center rounded-2xl bg-sky-500/80 shadow-md">
            <PiBookOpenTextLight className="text-xl text-white" />
          </div>
          <h2 className="my-1 font-semibold text-sky-50 text-sm line-clamp-2">
            {book.title}
          </h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 mt-2">
          <BiUserCircle className="text-cyan-300 text-xl" />
          <h3 className="my-1 text-sm text-slate-100 line-clamp-1">
            {book.author}
          </h3>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-3 rounded-xl bg-slate-900/40">
          <BiShow
            className="text-2xl text-sky-300 hover:text-white cursor-pointer transition-transform duration-150 hover:scale-110"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/book/${book._id}`}>
            <BsInfoCircle className="text-xl text-emerald-300 hover:text-white transition-transform duration-150 hover:scale-110" />
          </Link>
          <Link to={`/update/${book._id}`}>
            <AiOutlineEdit className="text-xl text-yellow-300 hover:text-white transition-transform duration-150 hover:scale-110" />
          </Link>
          <Link to={`/delete/${book._id}`}>
            <MdOutlineDelete className="text-xl text-red-400 hover:text-white transition-transform duration-150 hover:scale-110" />
          </Link>
          {canFavorite && (
            <button
              type="button"
              onClick={() => onToggleFavorite && onToggleFavorite(book._id)}
              className="ml-1"
            >
              {isFavorite ? (
                <FaStar className="text-2xl text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]" />
              ) : (
                <FaRegStar className="text-2xl text-yellow-300 hover:text-yellow-200" />
              )}
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;

