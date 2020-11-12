import * as React from 'react';
import { block } from 'bem-cn';

const b = block('about');
const About = () => {
  return (
    <div className={b()}>
      About
    </div>
  );
}

export default About;
