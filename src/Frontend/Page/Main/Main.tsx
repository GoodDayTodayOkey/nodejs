import * as React from 'react';
import { block } from 'bem-cn';

const b = block('main');
const Main = () => {
  return (
    <div className={b()}>
      Main
      <img src={`images/2.png`} />
    </div>
  );
}

export default Main;
