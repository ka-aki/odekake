const initialState = {
  place: ''
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return {
        ...state,
        place: action.payload.placeInput
      };

    default:
      return state;
  }
};
