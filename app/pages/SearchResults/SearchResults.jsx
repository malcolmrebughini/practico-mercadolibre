import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../containers/TopBar';
import Breadcrumbs from '../../containers/Breadcrumbs';
import SearchResults from '../../containers/SearchResults';


function SearchResultsPage(props) {
  return (
    <div>
      <TopBar />
      <Breadcrumbs />
      <SearchResults location={props.location} />
    </div>
  );
}


SearchResultsPage.propTypes = {
  location: PropTypes.object,
};


export default SearchResultsPage;
