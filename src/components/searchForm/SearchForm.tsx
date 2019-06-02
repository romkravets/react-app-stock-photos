import * as React from 'react'
import { Input, InputTypes } from '../input';

interface IState {
   value: string;
}

export class SearchForm extends React.Component<{}, IState> {
   public state = {
      value: ''
   };
   private changeHendle = (value: string) => {
      this.setState(state => ({...state, value}));
   }
   render() {
      const { value } = this.state;
      return (
      <form>
         <Input type={InputTypes.TEXT} value={value} onChange = {this.changeHendle}/>
      </form>
      )
   }
}