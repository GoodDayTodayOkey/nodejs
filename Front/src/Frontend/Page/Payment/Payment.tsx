// import * as React from 'react';
import * as React from 'react';
import { connect } from 'react-redux';

import { block } from 'bem-cn';
import { getMainItems } from 'Page/Main/creators/creators'

interface IProps {
  getMainItems: any,
  mainItems: any
}


const b = block('main');
const Main: React.FC<IProps> = (props) => {
  const {getMainItems, mainItems} = props;

  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('asdasd')
    fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json()).then(res => console.log(res))
  }, []);
  return (
    <div className={b()}>
      Main
      <button onClick={getMainItems()}>Активировать лазеры</button>
      <button onClick={() => setCount(5)}>Активировать лазеры</button>
      <div>{mainItems.data.counter}</div>
      <div>{count}</div>
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
