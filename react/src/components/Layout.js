import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="center">
          <h1>Welcome </h1>
          <ul role="nav">
              <li><Link to='/'>HOME</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/MyStories">MyStories</Link></li>
            <li><Link to="/NewStory">NewStory</Link></li>

          </ul>


        </div>
    )
  }
}

export default Layout;
