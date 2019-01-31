const initialState = {
  place: '',
  keyword: '',
  data: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return {
        ...state,
        place: action.payload.placeInput
      };
    case 'CHANGE_CATEGORY':
      return{
        ...state,
        category: action.payload.categoryInput
      };
    case 'CHANGE_KEYWORD':
      return{
        ...state,
        keyword: action.payload.keywordInput
      };
    default:
      return state;
  }
};