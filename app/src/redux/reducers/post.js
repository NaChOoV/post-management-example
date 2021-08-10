import { UPDATE_POST, ADD_POST } from '../actions/post';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_POST:
      return { data: payload.data };
    case ADD_POST:
      return { data: [...state.data, payload.data] };
    default:
      return state;
  }
};
