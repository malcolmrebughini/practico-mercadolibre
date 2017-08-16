import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mlLogo from './assets/ml_logo.png';
import styles from './styles.scss';


class TopBar extends React.Component {
  onInputChange = (evt) => {
    const value = evt.target.value;
    this.props.updateInput(value);
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.redirectToResultsView(this.props.inputValue);
  }

  render = () => {
    return (
      <div className={styles.topBar}>
        <div className={styles.container}>
          <Link className={styles.logo} to={{ pathname: '/' }}>
            <img src={mlLogo} />
          </Link>
          <div className={styles.search}>
            <form onSubmit={this.onFormSubmit}>
              <input
                className={styles.searchInput}
                value={this.props.inputValue}
                onChange={this.onInputChange}
              />
              <button className={styles.searchButton} type="submit"></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};


TopBar.propTypes = {
  search: PropTypes.func,
};


export default TopBar;
