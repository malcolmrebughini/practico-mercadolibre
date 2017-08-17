import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';


function mapStateToProps(state) {
  return {
    items: state.search.items,
  };
}

export default connect(mapStateToProps)(ItemsList);
