import postApi from '../../config/axios';

export const UPDATE_POST = 'UPDATE_POST';
export const ADD_POST = 'ADD_POST';

export const updatePost = (postList) => ({
  type: UPDATE_POST,
  payload: { data: postList },
});

export const addPost = (post) => ({
  type: UPDATE_POST,
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

export const createPost = () => {
  return async (dispatch) => {
    try {
      const response = await postApi.post('post');
      dispatch(updatePost(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};
