const CLIENT_ID = '3SMVNPD414UPVNPRHAFRR0JAVRKDCQ22K14JE51N445TB3SK';
const CLIENT_SECRET = '04HPQN4SSRPZPHCB34K0JP44YZI2L5IDGZ2VMYTEBGO3DV2N';

const API_URL = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

export const changePlaceInput = placeInput => {
  return {
    type: 'CHANGE_PLACE',
    payload: {
      placeInput
    }
  };
};

export const changeCategotyInput = categoryInput => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: {
      categoryInput
    }
  };
};

export const changeKeywordInput = keywordInput => {
  return {
    type: 'CHANGE_KEYWORD',
    payload: {
      keywordInput
    }
  };
};

export const clickButtonData = data => {
  return {
    type: 'CLICK_BUTTON',
    payload: {
      data
    }
  };
};

export const fetchData = (place, category, keyword) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `${API_URL}&near=${place}&query=${keyword}&locale=ja&v=20200101&categoryId=${category}&radius=250`
    );
    const data = await response.json();

    dispatch(clickButtonData(data));
  };
};
