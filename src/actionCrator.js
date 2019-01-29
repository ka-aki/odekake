export const GetData = () => ({
  type: 'RECEIVE_DATA',
  payload: {
    place,
    category,
    keyword,
  }
})