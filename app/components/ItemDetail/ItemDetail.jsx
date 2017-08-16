import React from 'react';
import styles from './style.scss';


class ItemDetail extends React.Component {
  componentWillMount = () => {
    this.props.getItem(this.props.itemId);
  }

  render = () => {
    const { data } = this.props;

    return (
      !this.props.isLoading ?
        <div className={styles.container}>
          <div className={styles.someContainer}>
            <div className={styles.innerContainer}>
              <div className={styles.pic}>
                <img src={data.pictures[0].url} />
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


ItemDetail.defaultProps = {
  data: { pictures: [] },
};


export default ItemDetail;
