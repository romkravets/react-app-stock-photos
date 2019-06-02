import * as React from 'react'
import './Input.scss';

export enum InputTypes {
   TEXT = 'text',
   NUMBER = 'number',
   PASSWORD = 'password',
   PHONE = 'phone'
}

interface IProps {
   type: InputTypes;
   value: string;
   onChange: (value: string) => void;
}

export class Input extends React.PureComponent<IProps> {
   onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
      const {value} = e.currentTarget;
      this.props.onChange(value);
   }
   render() {
      return <div className={'input'}>
         <input
         value={this.props.value}
         onChange={this.onChange}
         type={this.props.type}
         className="input__native-input"/>
      </div>
   }
}