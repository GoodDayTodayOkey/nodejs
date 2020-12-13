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
  return <>Paymnet</>
}

const mapStateToProps = (state) => ({
  mainItems: state.mainItems
})

const mapDispatchToProps = dispatch => ({
  getMainItems: getMainItems.action(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);
