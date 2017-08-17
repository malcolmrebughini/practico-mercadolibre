import { connect } from 'react-redux';
import actions from '../../actions';
import SearchResults from './SearchResults';


function mapStateToProps(state, ownProps) {
  return {
    itemsCount: (state.search.items || []).length,
    isLoading: state.search.isLoading,
    q: ownProps.location.search.replace('?q=', ''),
  };
}


export default connect(mapStateToProps, actions)(SearchResults);
