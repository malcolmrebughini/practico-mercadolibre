import { connect } from 'react-redux';
import actions from '../actions';
import SearchResults from '../components/SearchResults';


function mapStateToProps(state, ownProps) {
  return {
    items: state.search.items,
    isLoading: state.search.isLoading,
    q: ownProps.location.search.replace('?q=', ''),
  };
}

export default connect(mapStateToProps, actions)(SearchResults);
