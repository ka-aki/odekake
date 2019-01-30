export const searchReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return {
        ...state,
        place: action.payload.placeInput
      };

    default:
      break;
  }
};
