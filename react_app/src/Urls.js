import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound"
import TodosSample from "./components/Pages/TodosSample"
import StartPage from "./components/Pages/Links/StartPage";
import Login from "./components/Pages/Login";
import EditLinksPage from "./components/Pages/Links/EditLinks"

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({ isAuthenticated, children, ...rest}) {

    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


function PrivateRouteComp({ isAuthenticated, Component,...props}) {
    {/*<PrivateRoute path="/royale2/:id" isAuthenticated={props.isAuthenticated}  render={matchProps => <Royale {...props} {...matchProps} />} />*/}

    // const { children, ...props } = rest;
    return (
      <Route
        {...props}
        render={({ location }) =>
        isAuthenticated ? (
            <Component match={props.computedMatch} {...location} {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/login/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


function Urls(props, someState) {
    console.log("URLS > ", props)

    if(props.token !== null){
        let kek = 1;
    }

    return (
        <div>
            <BrowserRouter>
                <Switch>
                     {/*<Route exact path="/tutorial/"> <Tutorial {...props} /></Route>*/}
                     {/*<PrivateRoute exact path="/update_password/" isAuthenticated={props.isAuthenticated}><PasswordUpdate {...props}/></PrivateRoute>*/}
                     {/*<PrivateRoute exact path="/" isAuthenticated={props.isAuthenticated}><Home {...props} someState={someState}/></PrivateRoute>*/}
                     {/*/!*<PrivateRoute2 path="/royale/:id" component={Royale} props={props}/>*!/*/}
                     {/*<PrivateRouteComp path="/royale/:id"*/}
                     {/*                  isAuthenticated={props.isAuthenticated}*/}
                     {/*                  props={props}*/}
                     {/*                  Component={Royale}*/}
                     {/*                  customToolbar={props.customToolbar}*/}
                     {/*                  setCustomToolbar={props.setCustomToolbar}*/}
                     {/*></PrivateRouteComp>*/}
                     {/*/!*<PrivateRouteComp path="/royale/:id" isAuthenticated={props.isAuthenticated} props={props}><Royale {...props}/></PrivateRouteComp>*!/*/}
                     {/*<PrivateRoute path="/usersettings" component={UserSettings} props={props}/>*/}

                     {/*<Route exact path="/" isAuthenticated={props.isAuthenticated}><Home {...props} someState={someState}/></Route>*/}
                    {/*<Route exact path="/todossample" component={TodosSample} />*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login/"> <Login {...props} /></Route>

                    {/*<Route exact path="/links/:linkid/edit/"> <EditLinksPage {...props} /></Route>*/}
                    <Route path='/links/:linkid/edit/' render={(props) => <EditLinksPage {...props}/>}/>

                    <Route exact path="/startpage/:username/:startpagename" component={StartPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;
