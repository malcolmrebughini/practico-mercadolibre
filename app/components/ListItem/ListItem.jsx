import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import freeShipping from './assets/ic_shipping.png';
import styles from './styles.scss';


function ListItem(props) {
  const linkTo = {
    pathname: `/items/${props.id}`,
  };

  return (
    <li className={styles.item} itemScope itemType="http://schema.org/Product">
      <Link title={props.title} to={linkTo}>
        <div className={styles.thumbnail}>
          <img src={props.thumbnail} alt={props.title} itemProp="image" />
        </div>
        <div className={styles.description}>
          <span className={styles.price}>
            $ {Math.round(props.price).toLocaleString('es-AR')}
            {
              props.freeShipping &&
                <img alt="envio gratis" className={styles.freeShipping} src={freeShipping} />
            }
          </span>
          <span className={styles.title} itemProp="name">{props.title}</span>
        </div>
        <div className={styles.location}>
          {props.location}
        </div>
      </Link>
    </li>
  );
}


ListItem.propTypes = {
  id: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.string,
  freeShipping: PropTypes.bool,
};


export default ListItem;
