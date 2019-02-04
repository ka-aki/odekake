import { connect } from 'react-redux';
import Result from '../Result';

const mapStateToProps = state => {
  return {
    data: state.fetchDataReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
