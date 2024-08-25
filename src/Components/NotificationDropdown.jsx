import React, { useState } from 'react';
import bellIcon from '../assets/bell_icon.png'; // Adjust the path as necessary

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Bell Icon */}
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
        aria-expanded={isOpen}
        aria-label="Toggle notifications"
      >
        <img
          className="w-6 cursor-pointer hover:opacity-80"
          src={bellIcon}
          alt="Notifications"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-900 text-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-semibold">What’s New</h3>
            <p className="text-sm text-gray-400">Latest updates from artists and podcasts you follow.</p>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src="path_to_avatar_or_thumbnail" // Replace with the actual image path
                alt="Artist"
              />
              <div>
                <p className="font-medium">Artist Name</p>
                <p className="text-sm text-gray-400">New album released</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src="path_to_avatar_or_thumbnail" // Replace with the actual image path
                alt="Podcast"
              />
              <div>
                <p className="font-medium">Podcast Name</p>
                <p className="text-sm text-gray-400">New episode available</p>
              </div>
            </div>
            {/* Additional notifications can go here */}
          </div>
          <div className="p-4 border-t border-gray-700 text-center">
            <button className="text-xs bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600">
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
