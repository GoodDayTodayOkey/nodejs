import * as React from 'react';
import { block } from 'bem-cn';

const b = block('task');

const Main = () => {
  return (
    <div className={b()}>
      Hello World!
    </div>
  );
}

export default Main;
