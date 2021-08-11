import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../redux/actions/post';
import Table from '../components/Table';

export default function PostPage() {
  const dispatch = useDispatch();
  const globalPost = useSelector((state) => state.post);
  const [postList, setPostList] = useState(globalPost.data);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  useEffect(() => {
    setPostList(globalPost.data);
  }, [globalPost]);

  const postFiltered = (filter) => {
    if (filter !== '') {
      const filteredPost = globalPost.data.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      );
      setPostList(filteredPost);
    } else {
      setPostList(globalPost.data);
    }
  };

  return (
    <div className="h-screen md:px-28 lg:px-56 xl:px-96 bg-gray-200">
      <Table postList={postList} onFilter={postFiltered} />
    </div>
  );
}
