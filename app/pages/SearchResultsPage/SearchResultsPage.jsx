import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import TopBar from '../../containers/TopBar';
import Breadcrumbs from '../../containers/Breadcrumbs';
import ItemsList from '../../containers/ItemsList';


class SearchResultsPage extends React.Component {
  componentWillMount = () => {
    if (this.props.itemsCount === 0) {
      this.props.search(this.props.q);
      this.props.updateInput(this.props.q);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.q !== this.props.q) this.props.search(nextProps.q);
  }

  componentWillUnmount = () => {
    this.props.clearData();
  }

  render = () => {
    const q = `${this.props.q.charAt(0).toUpperCase()}${this.props.q.slice(1)}`;
    const description = `Encontrá ${q} en Mercado Libre. Descubrí la mejor forma de comprar online.`;

    return (
      <div>
        <TopBar />
        { !this.props.isLoading &&
          <div>
            <Helmet>
              <title>{q} en MercadoLibre</title>
              <meta name="description" content={description} />
            </Helmet>
            <Breadcrumbs />
            <ItemsList />
          </div>
        }

      </div>
    );
  }
}


SearchResultsPage.propTypes = {
  q: PropTypes.string,
  search: PropTypes.func,
  updateInput: PropTypes.func,
  clearData: PropTypes.func,
  isLoading: PropTypes.bool,
  itemsCount: PropTypes.number,
};


export default SearchResultsPage;
