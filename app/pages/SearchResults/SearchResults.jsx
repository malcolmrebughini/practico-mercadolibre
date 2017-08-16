import React from 'react';
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
  )
}


export default SearchResultsPage;
