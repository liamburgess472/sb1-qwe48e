import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, Home, Book, Heart, Settings, LogOut, Menu, X } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const signOut = useAuthStore((state) => state.signOut);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-white">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Creator Recipes</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <SidebarContent onSignOut={handleSignOut} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r">
          <div className="flex items-center h-16 px-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Creator Recipes</span>
            </Link>
          </div>
          <SidebarContent onSignOut={handleSignOut} />
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex h-16 bg-white border-b lg:hidden">
          <button
            type="button"
            className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center px-4">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Creator Recipes</span>
            </Link>
          </div>
        </div>

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ onSignOut }: { onSignOut: () => void }) {
  return (
    <nav className="flex-1 px-2 py-4 space-y-1">
      <Link
        to="/"
        className="flex items-center px-2 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
      >
        <Home className="mr-3 h-6 w-6" />
        Home
      </Link>
      <Link
        to="/my-recipes"
        className="flex items-center px-2 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
      >
        <Book className="mr-3 h-6 w-6" />
        My Recipes
      </Link>
      <Link
        to="/favorites"
        className="flex items-center px-2 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
      >
        <Heart className="mr-3 h-6 w-6" />
        Favorites
      </Link>
      <Link
        to="/settings"
        className="flex items-center px-2 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
      >
        <Settings className="mr-3 h-6 w-6" />
        Settings
      </Link>
      <button
        onClick={onSignOut}
        className="w-full flex items-center px-2 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
      >
        <LogOut className="mr-3 h-6 w-6" />
        Sign Out
      </button>
    </nav>
  );
}