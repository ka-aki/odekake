import { connect } from 'react-redux';
import { changePlaceInput } from '../actions/search';

const mapDispatchToProps = dispatch => {
  return {
    changePlace: placeInput => {
      dispatch(changePlaceInput(placeInput));
    }
  };
};

const mapStateToProps = state => {
  return {
    place: state.searchReducer.place
  };
};
