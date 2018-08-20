import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Block from './blockx.png';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {

    return (
      <nav className="navbar is-fixed-top level" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">





          <a className='navbar-item' href="https://blockxlabs.com">
            <img src={Block} width="150" height="56" />
          </a>





          
        </div>   

        <div id="navbarExampleTransparentExample" className='navbar-menu'>
          <div className="navbar-start">

            <a to='/hackathons' className='navbar-item' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
              Stuff
            </a>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                
                <p className="control">
                  <a className="button is-info" href='https://meetup.com'>
                    <span>
                      About The event 
                    </span>
                  </a>
                </p>
                
                <p className="control">
                  <a className="button is-info" href='https://www.doctorswithoutborders.org/'>
                    <span>
                      About the Charity 
                    </span>
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>   
      </nav>
    );
  }
}

export default NavBar;
