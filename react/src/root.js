import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout';
import Profile from './components/Profile';
import MyStories from './components/MyStories';
import NewStory from './components/NewStory';
import Block from './components/Block';
import StoryListContainer from  './containers/StoryListContainer';
import StoryContainer from './containers/StoryContainer';
import Scene from './components/Scene';
import SceneContainer from './containers/SceneContainer';


class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/Scene" component={Scene}/>
        <Route path="/this" component={Block}/>
         <Route path='/' component={Layout}>
          <IndexRoute component={MyStories} />
                      <Route path="/MyStories" component={MyStories}/>
                    <Route path="/profile" component={Profile}/>
                  <Route path="/NewStory" component={NewStory}/>
                <Route path="/storylistcontainer" component={StoryListContainer}/>
              <Route path="/stories/:id" component={StoryContainer} />
            <Route path="/scenes/:id" component={SceneContainer} />
          <Route path="stories/:id/scenes/:id" component={SceneContainer} />
         </Route>
      </Router>
    )
  }
}

export default Root;
