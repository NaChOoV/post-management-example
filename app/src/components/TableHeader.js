import React, { useState, useEffect } from 'react';
import CreatePostModal from './CreatePostModal';

export default function TableHeader({ onFilter }) {
  const [isCreating, setIsCreating] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    onFilter(filterValue);
  }, [filterValue]);

  const onCreateHandler = () => setIsCreating(!isCreating);
  return (
    <>
      <CreatePostModal isOpen={isCreating} onClose={onCreateHandler} />
      <div className="flex flex-row items-center justify-between px-6 py-4 bg-white rounded-xl shadow-lg space-x-2">
        <div className="flex-shrink">
          <div className="flex flex-row bg-gray-100 p-4 space-x-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="line"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="bg-gray-100 outline-none"
              onChange={(e) => setFilterValue(e.target.value)}
              type="text"
              placeholder="Filtro por nombre..."
            />
          </div>
        </div>

        <button
          className="flex-shrink bg-green-500 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg cursor-pointer"
          onClick={onCreateHandler}
        >
          Nuevo Post
        </button>
      </div>
    </>
  );
}
