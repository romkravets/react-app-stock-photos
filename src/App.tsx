import * as React from 'react';
import './App.css';

import { SearchForm } from './components/searchForm';

class App extends React.Component {
  public render() {
    return (
      <div>
        <SearchForm />
      </div>
    );
  }
}

export default App;
