import * as React from 'react';
import { GridItem } from './GridItem';
import './Grid.scss';

import {Image} from '../../types/search-api';

interface IProps {
   items: Array<Image>;
   totalPages: number;
   total: number;
}

export  class Grid extends React.PureComponent<IProps> {
   render() {
      return <div className='grid'>
         {
            this.props.items.map(item => {
               const {description, urls, likes} = item;
               return <GridItem className='grid__item' description= {description} url={urls.small} likes={likes}/>
            })
         }
         <button className="grid__btn">Show more</button>
      </div>
   }
}