import * as React from 'react';
import axios from 'axios';
import './App.css';
import { SearchForm } from './components/searchForm';

const apiUrl = 'https://api.unsplash.com/search/photos?page=1&query=${SEARCH_PARAM}&client_id=f039a72980a54bb81c8d34ad9343c8337c5cf7f8ea4ae5562c15d531d8e84c3f'

class App extends React.Component {
  private search = async(value: string) => {
    console.log(value);
    const response = await axios.get(apiUrl.replace('${SEARCH_PARAM}', value));
    console.log(response);

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
