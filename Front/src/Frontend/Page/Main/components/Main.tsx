// import * as React from 'react';
import * as React from 'react';
import { block } from 'bem-cn';
import Carousel from 'Components/Carousel/Carousel';
import Perfomance from 'Components/Perfomance/Perfomance';

interface IProps {
}


const b = block('main');

const Main: React.FC<IProps> = () => {
  return (
    <>
      <Perfomance />
      <Carousel />
    </>
  );
}

export default Main;
