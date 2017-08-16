import 'babel-polyfill';
import React from 'react';
import { Route } from 'react-router-dom';
import TopBar from './containers/TopBar';
import HomePage from './pages/Home';
import SearchResultsPage from './pages/SearchResults';
import ItemDetailPage from './pages/ItemDetailPage';


class App extends React.Component {
  render = () => {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/items" component={SearchResultsPage} />
        <Route path="/items/:itemId" component={ItemDetailPage} />
      </div>
    );
  };
}


export default App;
