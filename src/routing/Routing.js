import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from '../landing/Landing';
// import Corporate from '../corporate/CorporarMerge';
// import Navbar from '../navbar/Navbar';

class Routing extends React.Component {
    state = {};

    render() {
      return (
        <div>

          <Switch>
            <Route path="/" {...this.props} component={Landing} />
          </Switch>

        </div>
      );
    }
}

export default withRouter(Routing);
