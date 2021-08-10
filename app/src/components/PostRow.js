import React from 'react';

const PostRow = ({ post }) => {
  const onClickHandler = () => {
      console.log('delete post id',post.id)
  };

  return (
    <>
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
          <button
            onClick={onClickHandler}
            className="bg-red-400 inline-block content-end  py-2 px-4 text-white font-semibold rounded-lg hover:shadow-lg cursor-pointer"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
export default PostRow;
