import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = ({ user, favoriteBookIds, onToggleFavorite, showOnlyFavorites }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        // const res = await axios.get('https://bookstore-server-po8m.onrender.com/api/v1/allbooks',{withCredentials: true});
        const res = await axios.get('https://bookstore-server-po8m.onrender.com/api/v1/allbooks');
        //console.log('API Response:', res.data);
        setBooks(res.data.data); // Update books with the data property from the response
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks([]); // Set books to an empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const visibleBooks = useMemo(() => {
    if (!showOnlyFavorites) {
      return books;
    }
    return books.filter((book) => favoriteBookIds.includes(book._id));
  }, [books, favoriteBookIds, showOnlyFavorites]);

  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      <section className="glass-panel px-5 py-4 mt-4 mb-5">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold text-sky-50 drop-shadow-sm">
              Books Library
            </h1>
            <p className="text-sm text-sky-100/80 mt-1">
              Browse, manage and favorite your most loved books in a colorful
              dashboard.
            </p>
          </div>
          <Link to="/create">
            <button className="neon-button-primary">
              <MdOutlineAddBox className="text-lg mr-1" />
              Add New Book
            </button>
          </Link>
        </header>

        <div className="mt-4 flex justify-center items-center gap-x-3">
          <button
            className={`px-4 py-1 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
              showType === 'table'
                ? 'bg-white text-sky-700 border-white shadow'
                : 'bg-sky-500/30 text-sky-50 border-sky-300/60 hover:bg-sky-500/60'
            }`}
            onClick={() => setShowType('table')}
          >
            Table View
          </button>
          <button
            className={`px-4 py-1 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
              showType === 'card'
                ? 'bg-white text-sky-700 border-white shadow'
                : 'bg-sky-500/30 text-sky-50 border-sky-300/60 hover:bg-sky-500/60'
            }`}
            onClick={() => setShowType('card')}
          >
            Card View
          </button>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : visibleBooks.length === 0 ? (
        <p className="mt-6 text-center text-sky-100/80">
          {showOnlyFavorites
            ? 'No favorite books selected yet.'
            : 'No books available.'}
        </p>
      ) : showType === 'card' ? (
        <BooksCard
          books={visibleBooks}
          favoriteBookIds={favoriteBookIds}
          onToggleFavorite={onToggleFavorite}
          user={user}
        />
      ) : (
        <div className="glass-panel px-4 py-3">
          <BooksTable
            books={visibleBooks}
            favoriteBookIds={favoriteBookIds}
            onToggleFavorite={onToggleFavorite}
            user={user}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
