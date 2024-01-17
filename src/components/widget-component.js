import ListWidget from './list-widget-component';
import NumberWidget from './number-widget-component';

export const Widget = ({ data }) => {
  switch(data.type) {
    case 'list':
      return <ListWidget data={data} />
    case 'number':
      return <NumberWidget data={data} />
    default:
      break;
  }
}
