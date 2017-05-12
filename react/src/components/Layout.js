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

        <br/>
                <div>
          <ul role="nav">

            <Link to="/storylistcontainer">
              <div className="c--anim-btn">
                <span className="c-anim-btn">My Stories</span>
                  <span>
                    View All!
                      </span>
                        </div></Link>
                        <br/>
                        <div className="boxfloat">

                        <a href="/this">
                          <div className="c--anim-btn">
                            <span className="c-anim-btn">New Story</span>
                              <span>
                                Create
                                  </span>
                                    </div>
                                    </a>
                                    </div>
                                  </ul>
                                </div>
                               <div className= "scroll">
                               <br/>
                              {this.props.children}







        </div>
          </div>
    )
  }
}

export default Layout;
