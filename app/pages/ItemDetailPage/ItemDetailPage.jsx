import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import TopBar from '../../containers/TopBar';
import Breadcrumbs from '../../containers/Breadcrumbs';
import ItemDetail from '../../containers/ItemDetail';


class ItemDetailPage extends React.Component {
  componentWillMount = () => {
    if (Object.keys(this.props.data).length === 0) this.props.getItem(this.props.itemId);
  }

  componentWillUnmount = () => {
    this.props.clearData();
  }

  render = () => {
    const numberFormatter = new Intl.NumberFormat('es-AR');
    const categories = this.props.categories.reduce((string, value, index, array) => {
      if (array.length === index + 1) return `${string} ${value}.`;
      return `${string} ${value},`;
    }, '').trim();
    const price = this.props.data.price &&
      numberFormatter.format(
        this.props.data.price.integer + (this.props.data.price.decimals / 100),
      );
    const description =
      `Cómpralo en Mercado Libre a $ ${price} - Encuentra más productos de ${categories}`;

    return (
      <div>
        <TopBar />
        { !this.props.isLoading &&
          <div>
            <Helmet>
              <title>{`${this.props.data.title} - $ ${price} en MercadoLibre`}</title>
              <meta name="description" content={description} />
            </Helmet>
            <Breadcrumbs />
            <ItemDetail />
          </div>
        }
      </div>
    );
  }
}


ItemDetailPage.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.shape({
      integer: PropTypes.number,
      decimals: PropTypes.number,
    }),
    title: PropTypes.string,
  }),
  itemId: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  getItem: PropTypes.func,
  clearData: PropTypes.func,
};

ItemDetailPage.defaultProps = {
  data: {},
  categories: [],
};


export default ItemDetailPage;
