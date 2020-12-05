import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { block } from 'bem-cn';
import { getMainItems } from 'Page/Main/creators/creators'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const b = block('main');

const Main = (props) => {
  const {getMainItems, mainItems} = props;

  return (
    <div className={b()}>
      Main
      <button onClick={getMainItems()}>Активировать лазеры</button>
      {mainItems.loaded &&<div>{mainItems.data.counter}</div>}
      <img src={`/images/2.png`} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  mainItems: state.mainItems
})

const mapDispatchToProps = {
  getMainItems: getMainItems.action
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
