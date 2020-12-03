import * as React from 'react';
import { block } from 'bem-cn';
import actions from 'Page/Main/actions/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const b = block('main');

const Main = () => {
  const dispatch = useDispatch();
  const mainItems = useSelector(state => state.mainItems);

  const getItems = () => dispatch(actions.getMainItems(10));

  return (
    <div className={b()}>
      Main
      <button onClick={getItems} > Активировать лазеры</button>
      {mainItems.loaded &&<div>{mainItems.data.counter}</div>}
      <img src={`/images/2.png`} />
    </div>
  );
}

export default Main;
