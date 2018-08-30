var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "congress drink plate find secret drip pulse phone turtle size police public";




module.exports = {
    networks: {
      ropsten: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/69500eb24e3a4bd79fbb8cd1fbb9a3ef")
        },
        network_id: 3,
        gas: 4712389
      }   
    },
};