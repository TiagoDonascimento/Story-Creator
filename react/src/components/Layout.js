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
      <div>
          <h1>Welcome </h1>
          <ul role="nav">
              <li><Link to='/'>HOME</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/mystories">MyStories</Link></li>
            <li><Link to="/newstory">NewStory</Link></li>

          </ul>
          <PageTransition>
  {this.props.children}
</PageTransition>

        </div>
    )
  }
}

export default Layout;
