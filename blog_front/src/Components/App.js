import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, SignUpPage, SignInPage, PostPage } from 'Page';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/signin" component={SignInPage}/>
        <Route exact path="/post" component={PostPage}/>
      </Switch>
    </div>
  );
}; 

export default App;
    