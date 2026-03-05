import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";



const App = () => {
  return (
    <AppShell />
  )
}

const AppShell = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [favoriteBookIds, setFavoriteBookIds] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const handleLogin = (username) => {
    setUser({ username });
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    setFavoriteBookIds([]);
    setShowOnlyFavorites(false);
  };

  const toggleFavorite = (bookId) => {
    setFavoriteBookIds((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
    );
  };

  return (
    <>
      <Navbar
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={handleLogout}
        favoritesCount={favoriteBookIds.length}
        showOnlyFavorites={showOnlyFavorites}
        onToggleShowFavorites={() => setShowOnlyFavorites((prev) => !prev)}
      />
      <main className="pt-24 px-3 sm:px-4 pb-10">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                favoriteBookIds={favoriteBookIds}
                onToggleFavorite={toggleFavorite}
                showOnlyFavorites={showOnlyFavorites}
              />
            }
          />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/book/:id" element={<ShowBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Routes>
      </main>
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
};

export default App