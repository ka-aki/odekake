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
    search: (place, categoryId, keyword) => {
      dispatch(fetchData(place, categoryId, keyword));
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
