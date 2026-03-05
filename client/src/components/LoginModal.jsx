import React, { useState } from 'react';

const isAlphanumeric = (value) => /^[a-zA-Z0-9]+$/.test(value);

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError('Username is required.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    if (!isAlphanumeric(password)) {
      setError('Password must be alphanumeric (letters and numbers only).');
      return;
    }

    setError('');
    onLogin(username.trim());
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/80">
      <div className="glass-panel w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800">User Login</h2>
          <button
            className="text-slate-500 hover:text-slate-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-red-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password (alphanumeric)
            </label>
            <input
              type="password"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-red-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Letters and numbers only"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="px-3 py-1 rounded-md text-sm font-semibold text-slate-600 hover:bg-slate-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 rounded-md text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

