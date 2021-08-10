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
  },[]);

  useEffect(() =>{
    setPostList(globalPost.data);
  },[globalPost])

  return (
    <div className="h-screen p-3 md:px-28 lg:px-56 xl:px-96 bg-gray-200">
      <Table postList={postList} />
    </div>
  );
}
