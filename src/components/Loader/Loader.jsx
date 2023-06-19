import { ThreeCircles } from 'react-loader-spinner';
import './Loader.scss';

export const Loader = () => (
  <ThreeCircles
    height='100'
    width='100'
    color='#4fa94d'
    wrapperClass='loaderOverlay'
    visible={true}
    ariaLabel='three-circles-rotating'
    outerCircleColor='#14578e'
    innerCircleColor='#ed1c24'
    middleCircleColor='#d3b44f'
  />
);
