import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import styles from './styles.scss';


function ItemsList(props) {
  return (
    <ol className={styles.itemsList}>
      {props.items.map(item =>
        (<ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          currencyId={item.currency_id}
          price={item.price}
          thumbnail={item.thumbnail}
          location={item.address.state_name}
          freeShipping={item.shipping.free_shipping}
        />),
      )
      }
    </ol>
  );
}


ItemsList.propTypes = {
  items: PropTypes.array,
};


ItemsList.defaultProps = {
  items: [],
};


export default ItemsList;
