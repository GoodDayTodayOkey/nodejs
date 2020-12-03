import * as React from 'react';
import { block } from 'bem-cn';
import { Route, Switch } from 'react-router-dom';
import routes from 'Routes/routes';
import NoMatch from 'Page/NoMatch/NoMatch';

const b = block('app');
const App = () => {
  return (
    <div className={b()}>
      <Switch>
        {routes.map(({path, exact, component: C, ...rest}) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) =>(<C {...props} {...rest} />)}
          />
        ))}
        <Route render={(props) =>(<NoMatch {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
