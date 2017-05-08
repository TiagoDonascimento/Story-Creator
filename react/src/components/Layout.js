import React from 'react';
import { Link } from 'react-router';
import PageTransition from 'react-router-page-transition';

class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="animated rotateInDownLeft">
          <h1>Welcome </h1>
          <ul role="nav">
              <li><Link to='/'>HOME</Link></li>

            <li><Link to="/mystories">MyStories</Link></li>
            <li><Link to="/newstory">NewStory</Link></li>
            <li><Link to="/StoryListContainer">Characters</Link></li>
              <li><a href="/this">New Character</a></li>
    



          </ul>

            {this.props.children}


        </div>
    )
  }
}

export default Layout;
