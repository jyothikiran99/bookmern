import React from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';

const Navbar = ({
  user,
  onLoginClick,
  onLogoutClick,
  favoritesCount,
  showOnlyFavorites,
  onToggleShowFavorites,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-400 shadow-[0_10px_40px_rgba(56,189,248,0.6)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/30 shadow-inner">
            <PiBookOpenTextLight className="text-2xl text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm uppercase tracking-[0.25em] text-sky-100">
              MERN
            </div>
            <div className="text-lg font-semibold text-white drop-shadow-sm">
              BookStore Dashboard
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            className={`neon-button text-xs sm:text-sm border border-white/40 ${
              showOnlyFavorites
                ? 'bg-white/20'
                : 'bg-sky-500/40 hover:bg-sky-400/60'
            }`}
            onClick={onToggleShowFavorites}
          >
            <span className="mr-1">Favorite Books</span>
            {favoritesCount > 0 && (
              <span className="inline-flex items-center justify-center rounded-full bg-white text-sky-600 text-[10px] font-bold px-2 py-0.5">
                {favoritesCount}
              </span>
            )}
          </button>

          {user ? (
            <>
              <span className="hidden sm:inline-flex text-xs sm:text-sm text-sky-50 bg-white/10 px-3 py-1 rounded-full border border-white/30">
                <span className="opacity-70 mr-1">Signed in as</span>
                <span className="font-semibold">{user.username}</span>
              </span>
              <button
                className="neon-button bg-red-500/90 hover:bg-red-400 border border-white/40 text-xs sm:text-sm"
                onClick={onLogoutClick}
              >
                Exit
              </button>
            </>
          ) : (
            <button
              className="neon-button-primary text-xs sm:text-sm"
              onClick={onLoginClick}
            >
              User Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

