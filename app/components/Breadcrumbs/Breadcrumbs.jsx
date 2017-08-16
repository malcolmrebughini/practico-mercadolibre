import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';


class Breadcrumbs extends React.PureComponent {
  render = () => (
    <div className={styles.container}>
      { this.props.list.map((value, index, array) => (
        <span className={styles.breadCrumb} key={`breadCrumb-${value}`}>
          { array.length !== index + 1 ? `${value} > ` : value }
        </span>
      ))
      }
    </div>
  )
}


Breadcrumbs.propTypes = {
  list: PropTypes.array,
};


export default Breadcrumbs;
