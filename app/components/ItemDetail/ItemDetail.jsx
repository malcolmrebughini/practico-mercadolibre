import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';


class ItemDetail extends React.Component {
  componentWillMount = () => {
    if (Object.keys(this.props.data).length === 0) this.props.getItem(this.props.itemId);
  }

  render = () => {
    const { data } = this.props;

    return (
      !this.props.isLoading ?
        <div className={styles.container}>
          <div className={styles.someContainer}>
            <div className={styles.innerContainer}>
              <div className={styles.pic}>
                <img src={data.pictures[0].url} alt={data.title} />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.condition}>
                  {data.condition} - {data.sold_quantity} vendidos
                </div>
                <h1 className={styles.title}>{ data.title }</h1>
                <div className={styles.price}>$ {data.price}</div>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
            <div className={styles.infoContainer2}>
              <h2 className={styles.descriptionTitle}>Descripción del producto</h2>
              <p className={styles.description}>{data.description.plain_text}</p>
            </div>
          </div>
        </div>
        : null
    );
  };
}


ItemDetail.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    pictures: PropTypes.array,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    tite: PropTypes.string,
  }),
  getItem: PropTypes.func,
  itemId: PropTypes.string,
};


ItemDetail.defaultProps = {
  data: {},
};


export default ItemDetail;
