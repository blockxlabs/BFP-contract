import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Block from './blockx.png';
import Peace from './peace.png'


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





          <a className='navbar-item' href="https://www.blockchainforpeace.ca">
            <img src={Peace} width="180" height="70" />
          </a>





          
        </div>   

        <div id="navbarExampleTransparentExample" className='navbar-menu'>
          <div className="navbar-start">

            <a to='/hackathons' className='navbar-item' href='https://www.blockchainforpeace.ca'>
              home
            </a>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                
                <p className="control">
                  <a className="button is-info" href='https://www.eventbrite.ca/e/blockchain-for-peace-tickets-50000761624'>
                    <span>
                      About The event 
                    </span>
                  </a>
                </p>
                
                <p className="control">
                  <a className="button is-info" href='http://dignitasinternational.org/vision/'>
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
