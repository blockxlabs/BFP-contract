import React, { Component } from 'react';


class DonationInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ethValue: 0,
      message: '',
      messageLength: 0,
    }
  }

  handleValueChange = (e) => {
    this.setState({
      ethValue: e.target.value * 10 **18,
    });
  }

  handleMessageChange = (e) => {
    if (e.target.value.length <= 100) {
      this.setState({
        message: e.target.value,
        messageLength: e.target.value.length,
      });
    }
  }

  handleDonationSubmit = async (e) => {
    e.preventDefault();

    const { message, ethValue } = this.state;
    await this.props.createMessage(message, ethValue);
  }
  
  render() {

    return (
      <form className="field"
        onSubmit={this.handleDonationSubmit}>
        <div className="columns">
          <div className='column'>
            <div className="label level">Value: </div>
            <div className="control has-icons-left">
              <input className="input"
                type="text"
                placeholder="Value in Ether"
                maxLength="10"
                onChange={this.handleValueChange} />
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label level">
            Message:
         <p className="help is-info">{100 - this.state.messageLength} Char Left</p>
          </label>
          <div className="control has-icons-left">
            <textarea className="textarea"
              type="text"
              placeholder="What message would you like to be posted to the blockchain forever..."
              maxLength="100"
              onChange={this.handleMessageChange} />
          </div>
        </div>

        {/* <div className='columns level'>
          {this.state.notFilledOut &&
            <p className="help is-danger">
              Please complete sections
            </p>
          }
        </div> */}

        <button
          className="button is-primary"
          onSubmit={this.handleDonationSubmit}>
          Donate
        </button>

      </form>
    );
  }
}

export default DonationInputs;