import * as React from 'react';
import './App.css';

import { SearchForm } from './components/searchForm';

class App extends React.Component {
  private search = (value: string) => {
    console.log(value);
  }
  public render() {
    return (
      <div>
        <SearchForm onSubmit = {this.search}/>
      </div>
    );
  }
}

export default App;
