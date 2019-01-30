import { connect } from 'react-redux';
import { changePlaceInput } from '../actions/search';
import Search from '../Search';

const mapStateToProps = state => {
  return {
    place: state.searchReducer.place
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changePlace: placeInput => {
      dispatch(changePlaceInput(placeInput));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
