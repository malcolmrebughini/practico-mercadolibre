import React from 'react';
import ListItem from '../ListItem';
import styles from './style.scss';


class SearchResults extends React.Component {
  componentWillMount = () => {
    if(this.props.items.length === 0) this.props.search(this.props.q);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.q !== this.props.q) return this.props.search(nextProps.q);
  }

  render = () => {
    return (
      !this.props.isLoading ?
        <div>
          <ol className={styles.itemsList}>
            { this.props.items.map(item =>
                <ListItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  thumbnail={item.thumbnail}
                  location={item.address.state_name}
                  freeShipping={item.shipping.free_shipping}
                />
              )
            }
          </ol>
        </div>
      : null
    );
  };
}


SearchResults.defaultProps = {
  items: [],
};


export default SearchResults;
