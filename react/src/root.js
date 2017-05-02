import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './components/Layout';
import Profile from './components/Profile'
import MyStories from './components/MyStories'



class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Layout}/>
          <Route path="/MyStories" component={MyStories}/>
          <Route path="/profile" component={Profile}/>

      </Router>
    )
  }
}

export default Root;
