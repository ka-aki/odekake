import { connect } from 'react-redux';
import Result from '../Result';
import { setDialogValue, fetchDetailData } from '../actions/result';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    data: state.fetchDataReducer.data,
    dialog: state.setDialogReducer.dialog,
    detailData: state.setDetailDataReducer.detailData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDialogValue: dialog => {
      dispatch(setDialogValue(dialog));
    },
    fetchDetailData: venueId => dispatch(fetchDetailData(venueId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Result)
);
