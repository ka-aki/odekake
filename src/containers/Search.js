import { connect } from 'react-redux';
import { changePlaceInput, changeKeywordInput, changeCategotyInput, fetchData } from '../actions/search';
import Search from '../Search';
import Result from '../Result';

const mapStateToProps = state => {
  return {
    place: state.searchReducer.place,
    category: state.searchReducer.category,
    keyword: state.searchReducer.keyword,
    // data: state.fetchDataReducer.data,
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
    search: (place, keyword) => {
      dispatch(fetchData(place, keyword));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search, Result);
