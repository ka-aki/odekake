import { connect } from 'react-redux';
import Result from '../Result';
import { setDialogValue } from '../actions/result';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    data: state.fetchDataReducer.data,
    dialog: state.setDialogReducer.dialog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDialogValue: dialog => {
      dispatch(setDialogValue(dialog));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Result)
);
