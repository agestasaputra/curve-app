import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "app/components/footer";
import Landing from "app/pages/landing";
// import AuthenticatedRoute from "./AuthenticatedRoute";
// import UnauthenticatedRoute from "./UnauthenticatedRoute";

const Routes = ({ state, dispatch }) => {
  return (
    <React.Suspense fallback={null}>
      <Switch>
        {/* <UnauthenticatedRoute
          exact
          path="/"
          component={Landing}
          props={childProps}
        /> */}
        {/* <AuthenticatedRoute path="/home" component={Home} props={childProps} /> */}
        <Route
          path="/"
          component={props => (
            <Landing {...props} state={state} dispatch={dispatch} />
          )}
        />
      </Switch>
      <Footer />
    </React.Suspense>
  );
};

export default Routes;
