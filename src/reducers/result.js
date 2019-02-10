const initialState = {
  data: undefined,
  dialog: undefined
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

export const setDialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIALOG':
      return {
        ...state,
        dialog: action.payload.dialog
      };
    default:
      return state;
  }
};
