import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';

import TableHeader from './TableHeader';

export default function Table({ postList }) {
  return (
    <>
      <div className="flex flex-col">
        <TableHeader />
        <div className="my-5 shadow-lg rounded-xl ">
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
            <tbody className="bg-white divide-y divide-gray-200">
              {postList.map((post) => (
                <tr key={post.id}>
                  <td className="px-3 py-2">
                    <div className="overflow-x-auto">
                      <p className="text-md font-medium text-gray-900">{post.name}</p>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-justify overflow-auto">
                    <div className="text-sm text-gray-900">{post.description}</div>
                  </td>
                  <td className="px-3 py-2 text-sm font-medium text-right">
                    <div className="bg-red-400 inline-block content-end  py-2 px-4 text-white font-semibold rounded-lg hover:shadow-lg cursor-pointer">
                      Eliminar
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
