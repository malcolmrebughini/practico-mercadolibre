import { connect } from 'react-redux';
import actions from '../../actions';
import ItemDetail from './ItemDetail';


function mapStateToProps(state, ownProps) {
  return {
    state,
    isLoading: state.itemDetail.isLoading,
    data: state.itemDetail.data,
    itemId: ownProps.match.params.itemId,
    categories: state.categories,
  };
}


export default connect(mapStateToProps, actions)(ItemDetail);
