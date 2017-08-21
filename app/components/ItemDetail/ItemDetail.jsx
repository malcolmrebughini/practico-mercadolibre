import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


function ItemDetail(props) {
  const { data } = props;

  return (
    <div className={styles.container} itemScope itemType="http://schema.org/Product">
      <div className={styles.someContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.pic}>
            <img src={data.pictures[0].url} alt={data.title} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.condition}>
              {data.condition} - {data.sold_quantity} vendidos
            </div>
            <h1 className={styles.title} itemProp="name">{ data.title }</h1>
            <div className={styles.price}>
              $ {data.price.integer.toLocaleString('es-AR')}
              { data.price.decimals ?
                <span className={styles.priceDecimals}>{data.price.decimals}</span>
                : null
              }
            </div>
            <button className={styles.buyButton}>Comprar</button>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.descriptionTitle}>Descripción del producto</h2>
          <p
            className={styles.description}
            itemProp="description"
            dangerouslySetInnerHTML={
              { __html: data.description.text || data.description.plain_text }
            }
          />
        </div>
      </div>
    </div>
  );
}


ItemDetail.propTypes = {
  data: PropTypes.shape({
    pictures: PropTypes.array,
    price: PropTypes.shape({
      integer: PropTypes.number,
      decimals: PropTypes.number,
    }),
    description: PropTypes.shape({ plain_text: PropTypes.string }),
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    title: PropTypes.string,
  }),
};


ItemDetail.defaultProps = {
  data: {},
};


export default ItemDetail;
