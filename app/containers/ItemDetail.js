import { connect } from 'react-redux';
import actions from '../actions';
import ItemDetail from '../components/ItemDetail';


function mapStateToProps(state, ownProps) {
  return {
    data: state.itemDetail.data,
    isLoading: state.itemDetail.isLoading,
    itemId: ownProps.match.params.itemId,
  };
}


export default connect(mapStateToProps, actions)(ItemDetail);
