import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Hospital, User, Heart, Calendar, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Layout() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-900">
                <Heart className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-xl font-semibold">HealthCare Hub</span>
              </Link>
            </div>
            
            {user && (
              <div className="flex items-center space-x-4">
                <Link
                  to="/hospitals"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <Hospital className="h-5 w-5 mr-1" />
                  Hospitals
                </Link>
                <Link
                  to="/records"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <User className="h-5 w-5 mr-1" />
                  Health Records
                </Link>
                <Link
                  to="/appointments"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <Calendar className="h-5 w-5 mr-1" />
                  Appointments
                </Link>
                <button
                  onClick={signOut}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}