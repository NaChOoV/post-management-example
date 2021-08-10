import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';

import TableHeader from './TableHeader';
import PostRow from './PostRow';

export default function Table({ postList }) {
  return (
    <>
      <div className="flex flex-col">
        <TableHeader />
        <div className="my-5 shadow-lg rounded-xl w-full">
          <table className="table-fixed divide-y w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-md font-medium text-gray-500 uppercase">
                  Nombre
                </th>
                <th className="px-3 py-2 text-left text-md font-medium text-gray-500 uppercase">
                  Descripcion
                </th>
                <th className="px-3 py-2 text-right text-md font-medium text-gray-500 uppercase">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-gray-200 overflow-y-scroll max-h-screen">
              {postList.map((post) => (
                <PostRow post={post} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
