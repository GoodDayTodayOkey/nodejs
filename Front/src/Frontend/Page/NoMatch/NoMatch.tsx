import * as React from 'react';
import { block } from 'bem-cn';

const b = block('nomatch');
const NoMatch = () => {
  return (
    <div className={b()}>
      NoMatch
    </div>
  );
}

export default NoMatch;