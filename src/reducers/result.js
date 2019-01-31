export const fetchDataReducer = (state, action) => {
    switch (action.type) {
      case 'CLICK_BUTTON':
        return {
          ...state,
          data: action.payload.data, 
        };
      default:
          return state;
      }
  };