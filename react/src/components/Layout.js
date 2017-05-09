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



            <li><Link to="/StoryListContainer">My Stories</Link></li>
              <li><a href="/this">New Story</a></li>


          </ul>
          <div className= "scroll">
            {this.props.children}
        </div>
          </div>
    )
  }
}

export default Layout;
