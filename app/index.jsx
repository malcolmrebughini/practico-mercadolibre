import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ItemDetailPage from './pages/ItemDetailPage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/items" component={SearchResultsPage} />
        <Route path="/items/:itemId" component={ItemDetailPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}


export default App;
