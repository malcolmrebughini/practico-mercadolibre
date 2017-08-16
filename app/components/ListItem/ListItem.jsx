import React from 'react';
import { Link } from 'react-router-dom';
import freeShipping from './assets/ic_shipping.png';
import styles from './style.scss';


function ListItem(props) {
  const linkTo = {
    pathname: `/items/${props.id}`,
  };

  return (
    <li className={styles.item}>
      <Link title={props.title} to={linkTo}>
        <div className={styles.thumbnail}>
          <img src={props.thumbnail} />
        </div>
        <div className={styles.description}>
          <span className={styles.price}>
            $ {props.price}
            { props.freeShipping && <img className={styles.freeShipping} src={freeShipping} /> }
          </span>
          <span className={styles.title}>{props.title}</span>
        </div>
        <div className={styles.location}>
          {props.location}
        </div>
      </Link>
    </li>
  );
}


export default ListItem;
