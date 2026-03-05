import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BooksTable = ({ books, favoriteBookIds = [], onToggleFavorite, user }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-sky-400/40 bg-slate-900/60">
      <table className="min-w-full text-sm">
        <thead className="bg-gradient-to-r from-sky-600/80 via-cyan-500/80 to-emerald-400/80 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold">No</th>
            <th className="px-4 py-3 text-left text-xs font-semibold">Title</th>
            <th className="px-4 py-3 text-left text-xs font-semibold max-md:hidden">Genre</th>
            <th className="px-4 py-3 text-left text-xs font-semibold max-md:hidden">Author</th>
            <th className="px-4 py-3 text-left text-xs font-semibold">Year</th>
            <th className="px-4 py-3 text-left text-xs font-semibold max-md:hidden">Pages</th>
            <th className="px-4 py-3 text-left text-xs font-semibold max-md:hidden">Publisher</th>
            <th className="px-4 py-3 text-left text-xs font-semibold">Edit</th>
            <th className="px-4 py-3 text-center text-xs font-semibold">Favorite</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className={index % 2 === 0 ? 'bg-slate-900/60' : 'bg-slate-800/50'}
            >
              <td className="px-4 py-2 text-sky-300">{index + 1}</td>
              <td className="px-4 py-2 text-sky-50">{book.title}</td>
              <td className="px-4 py-2 text-slate-200 max-md:hidden">
                {book.genre}
              </td>
              <td className="px-4 py-2 text-slate-200 max-md:hidden">
                {book.author}
              </td>
              <td className="px-4 py-2 text-slate-100">{book.year}</td>
              <td className="px-4 py-2 text-slate-200 max-md:hidden">
                {book.pages}
              </td>
              <td className="px-4 py-2 text-slate-200 max-md:hidden">
                {book.publisher}
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <Link to={`/update/${book._id}`}>
                    <AiOutlineEdit className="text-xl text-sky-400 hover:text-white transition-transform hover:scale-110" />
                  </Link>
                  <Link to={`/book/${book._id}`}>
                    <FaInfoCircle className="text-xl text-emerald-300 hover:text-white transition-transform hover:scale-110" />
                  </Link>
                  <Link to={`/delete/${book._id}`}>
                    <MdOutlineDelete className="text-xl text-red-400 hover:text-white transition-transform hover:scale-110" />
                  </Link>
                </div>
              </td>
              <td className="px-4 py-2 text-center">
                {user && (
                  <button
                    type="button"
                    onClick={() => onToggleFavorite && onToggleFavorite(book._id)}
                  >
                    {favoriteBookIds.includes(book._id) ? (
                      <FaStar className="mx-auto text-xl text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]" />
                    ) : (
                      <FaRegStar className="mx-auto text-xl text-yellow-300 hover:text-yellow-200" />
                    )}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable