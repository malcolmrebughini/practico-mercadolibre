import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../containers/TopBar';
import Breadcrumbs from '../../containers/Breadcrumbs';
import ItemDetail from '../../containers/ItemDetail';


function ItemDetailPage(props) {
  return (
    <div>
      <TopBar />
      <Breadcrumbs />
      <ItemDetail match={props.match} />
    </div>
  );
}


ItemDetailPage.propTypes = {
  match: PropTypes.object,
};


export default ItemDetailPage;
