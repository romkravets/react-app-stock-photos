import * as React from 'react'
import { Input, InputTypes } from '../input';

interface IProps {
   onSubmit: (value: string) => void;
}

interface IState {
   value: string;
}

export class SearchForm extends React.Component<IProps, IState> {
   public state = {
      value: ''
   };

   private onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.props.onSubmit(this.state.value);
   }
   private changeHendle = (value: string) => {
      this.setState(state => ({...state, value}));
   }
   render() {
      const { value } = this.state;
      return (
      <form onSubmit = {this.onSubmit}>
         <Input
            type={InputTypes.TEXT}
            value={value}
            onChange = {this.changeHendle}/>
      </form>
      )
   }
}