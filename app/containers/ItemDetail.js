import { connect } from 'react-redux';
import ItemDetail from '../components/ItemDetail';


function mapStateToProps(state) {
  return {
    data: state.itemDetail.data,
  };
}


export default connect(mapStateToProps)(ItemDetail);
