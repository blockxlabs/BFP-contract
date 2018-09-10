import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
    marginRight: 20,
  },
};

const style = {
    marginTop: 16,
    textAlign: 'center',
};

const colour = {
  marginRight: 10,
};

export default class DialogScrollable extends React.Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

    render() {
    const actions = [


      <RaisedButton
        label="Let Me Donate!"
        primary={true} style={colour}
        fullWidth={true}
        onClick={this.handleClose}
        />,
    ];

/*Scrolling done with autoScrollBodyContent={true}*/

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          fullWidth={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
         <h1><a>Welcome to the Blockchain For Peace!</a></h1>
         <p class="subtitle" style={style}>ONLY DONATE ETHER!!!!!!!!</p>
         <p class="subtitle" style={style}>Contract address "0x977116807902bd4d5d763dA7aa43dbb4e408259b"</p>
         <p class="subtitle" style={style}>Charity address "0xaf208FF43D2A265E047D52C9F54c753DB86D9D11"</p>
         <br></br>
         <h2 class="subtitle"></h2>
         <p>Blockchain for Peace is a probono event that will be held on Friday September 21, 2018 at 6 pm.</p>
         <p>The goal is to raise $10,000 in Ethereum for Dignitas International. Funds will go to their Indigenous Health Partners Program which provides health services to Indigenous Communities in Ontario.</p>
         <p></p>
         <p>When you donate through this portal, you will have the opportunity to write a permanent message of peace that will be recorded on the blockchain forever and see the message in real-time. </p>

         <p>Anonymous Donations are also welcome. Just send your value to the fallback function manually.</p>
         <p>To donate, please download Metamask at metamask.io.</p>
         <p>For more information, visit our website at www.blockchainforpeace.ca</p>
         
        </Dialog>
      </div>
    );
  }
}