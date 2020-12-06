// import * as React from 'react';
import * as React from 'react';
import { connect } from 'react-redux';

import { block } from 'bem-cn';
import { getMainItems } from 'Page/Main/creators/creators'
declare const __isBrowser__: boolean;

const b = block('main');
const Main = (props) => {
  const {getMainItems, mainItems} = props;

  if (typeof window === 'undefined') {
    const [count, setCount] = React.useState(0);
  }
  return (
    <div className={b()}>
      Main
      <button onClick={getMainItems()}>Активировать лазеры</button>
      <div>{mainItems.data.counter}</div>
      <div>
      <img src={`/images/2.png`} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  mainItems: state.mainItems
})

const mapDispatchToProps = dispatch => ({
  getMainItems: getMainItems.action(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);
