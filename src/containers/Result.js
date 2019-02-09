import { connect } from 'react-redux';
import Result from '../Result';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    data: state.fetchDataReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Result)
);
