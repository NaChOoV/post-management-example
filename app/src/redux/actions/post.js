import postApi from '../../config/axios';

export const UPDATE_POST = 'UPDATE_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const updatePost = (postList) => ({
  type: UPDATE_POST,
  payload: { data: postList },
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: { data: post },
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  payload: { data: post },
});

export const getPost = () => {
  return async (dispatch) => {
    try {
      const response = await postApi.get('post');
      dispatch(updatePost(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createPost = (formValues) => {
  return async (dispatch) => {
    try {
      const response = await postApi.post('post', formValues);
      dispatch(addPost(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const response = await postApi.delete(`post/${postId}`);
      console.log("post deleted",response.data);
      dispatch(removePost(response.data));
    } catch (err) {
      console.error(err.response.data);
    }
  };
};
