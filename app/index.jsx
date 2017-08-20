import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SearchResultsPage from './pages/SearchResults';
import ItemDetailPage from './pages/ItemDetailPage';


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/items" component={SearchResultsPage} />
      <Route path="/items/:itemId" component={ItemDetailPage} />
    </div>
  );
}


export default App;
