import { UPDATE_POST, ADD_POST, REMOVE_POST } from '../actions/post';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_POST:
      return { ...state, data: payload.data };
    case ADD_POST:
      return { ...state, data: [...state.data, payload.data] };
    case REMOVE_POST:
      return { ...state, data: state.data.filter((d) => d.id !== payload.data.id) };
    default:
      return state;
  }
};
