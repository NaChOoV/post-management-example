import { UPDATE_POST } from '../actions/post';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_POST:
      return { ...state, data: payload.data };
    default:
      return state;
  }
};
