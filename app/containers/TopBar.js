import { connect } from 'react-redux';
import actions from '../actions';
import TopBar from '../components/TopBar';


function mapStateToProps(state) {
  return {
    inputValue: state.topBar.inputValue,
  };
}

export default connect(mapStateToProps, actions)(TopBar);
