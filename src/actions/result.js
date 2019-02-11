export const setDialogValue = dialog => {
  return {
    type: 'SET_DIALOG',
    payload: {
      dialog
    }
  };
};

export const setDetailData = detailData => {
  return {
    type: 'SET_DETAIL_DATA',
    payload: {
      detailData
    }
  };
};

const BASE_URL = 'https://api.foursquare.com/v2/venues/';
const CLIENT_ID = '3SMVNPD414UPVNPRHAFRR0JAVRKDCQ22K14JE51N445TB3SK';
const CLIENT_SECRET = '04HPQN4SSRPZPHCB34K0JP44YZI2L5IDGZ2VMYTEBGO3DV2N';

export const fetchDetailData = venueId => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `${BASE_URL}${venueId}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&locale=ja&v=20200101`
    );

    const detailData = await response.json();
    dispatch(setDetailData(detailData));
  };
};
