import * as React from 'react'
import { Input, InputTypes } from '../input';

export class SearchForm extends React.Component<{}, {}> {
   render() {
      return (
      <form>
         <Input type={InputTypes.TEXT}/>
      </form>
      )
   }
}