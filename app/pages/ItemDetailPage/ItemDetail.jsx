import React from 'react';
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
  )
}


export default ItemDetailPage;
