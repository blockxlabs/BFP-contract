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
         <p class="subtitle" style={style}>Contract address ""</p>
         <p class="subtitle" style={style}>Charity address ""</p>
         <br></br>
         <h2 class="subtitle"></h2>
         <h3 class="subtitle">Blockchain For Peace is a probono event that will be held on Sunday September 23</h3>
         <p>The goal is to raise money for "insert charity"</p>
         <p></p>
         <p>When you donate through our portal you can write a message for peace that will be recorded on the blockchain for ever. Our front end will also list all donations and messages.</p>

         <p>If you want to donate anonomyously that is cool too you can interact with the fallback function.</p>
         <p>The easiest way to use our frontend is to get metamask at metamask.io and as you input information and click donate it will prompt you</p>
         
        </Dialog>
      </div>
    );
  }
}