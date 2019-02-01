const initialState = {
  date: {
    response: {
      venues: {
         name: '',
      }
    }
  }
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
};
