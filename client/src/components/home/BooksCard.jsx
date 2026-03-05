import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books, favoriteBookIds = [], onToggleFavorite, user }) => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard
          key={item._id}
          book={item}
          isFavorite={favoriteBookIds.includes(item._id)}
          onToggleFavorite={onToggleFavorite}
          canFavorite={Boolean(user)}
        />
      ))}
    </div>
  );
};

export default BooksCard;