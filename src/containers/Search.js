import { connect } from 'react-redux';
import {
  changePlaceInput,
  changeKeywordInput,
  changeCategotyInput,
  fetchData
} from '../actions/search';
import Search from '../Search';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    place: state.searchReducer.place,
    categoryId: state.searchReducer.categoryId,
    keyword: state.searchReducer.keyword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePlace: placeInput => {
      dispatch(changePlaceInput(placeInput));
    },
    changeCategory: categoryInput => {
      dispatch(changeCategotyInput(categoryInput));
    },
    changeKeyword: keywordInput => {
      dispatch(changeKeywordInput(keywordInput));
    },
<<<<<<< HEAD
    search: (place, categoryId, keyword) => {
      dispatch(fetchData(place, categoryId, keyword));
=======
    search: (place, category, keyword) => {
      dispatch(fetchData(place, category, keyword));
>>>>>>> 2ab2e2246703d3fa4c62db41f52c00384a6aaa3d
    }
  };
};

<<<<<<< HEAD
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
=======
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
>>>>>>> 2ab2e2246703d3fa4c62db41f52c00384a6aaa3d
