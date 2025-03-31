import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, BarChart2, MessageSquare, FileText, LogOut, Home, Sun, Moon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">EMG Care</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <Link to="/" className="nav-link dark:text-gray-200 dark:hover:text-white">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/dashboard" className="nav-link dark:text-gray-200 dark:hover:text-white">
                  <BarChart2 className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/chat" className="nav-link dark:text-gray-200 dark:hover:text-white">
                  <MessageSquare className="h-5 w-5" />
                  <span>Chat</span>
                </Link>
                <Link to="/reports" className="nav-link dark:text-gray-200 dark:hover:text-white">
                  <FileText className="h-5 w-5" />
                  <span>Reports</span>
                </Link>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <Sun className="h-5 w-5 text-gray-300" />
                  )}
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link dark:text-gray-200 dark:hover:text-white">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/login" className="nav-link dark:text-gray-200 dark:hover:text-white">Login</Link>
                <Link to="/register" className="nav-link dark:text-gray-200 dark:hover:text-white">Register</Link>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <Sun className="h-5 w-5 text-gray-300" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;