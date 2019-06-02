import * as React from 'react';

import './GridItem.scss';

interface IGridItemProps  {
   url: string;
   description: string;
   likes: number;
   link?: string;
   className?: string;
}
export class GridItem extends React.PureComponent<IGridItemProps> {
   render() {
      const { url, description } = this.props;
      return <div className='grid-item'>
         <img src={url}></img>
         <h3>{description}</h3>
      </div>
   }

}