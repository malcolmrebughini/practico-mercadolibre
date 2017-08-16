import { connect } from 'react-redux';
import Breadcrumbs from '../components/Breadcrumbs';


function mapStateToProps(state) {
  return {
    list: state.categories,
  };
}

export default connect(mapStateToProps)(Breadcrumbs);
