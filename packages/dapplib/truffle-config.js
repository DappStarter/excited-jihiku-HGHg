require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth predict code harvest forum equal gesture'; 
let testAccounts = [
"0xba7e047f096685f83ea4d07cfa05d022b302a50eeade2b5084cb5eaf468d5e90",
"0x21fe48d629b0859738fedfb14ee5cea64d382bd312566b15be7bc05af2d1e501",
"0xf69c27080f45d15933c11cd192c59750e5bad69d6d932417369fc7ae62d428f0",
"0x409dc7d341a518ff9eaab565ed695898674df1a334fda0c58004ffb4039bbc0a",
"0x3542bd3acbc04781949a95d738ed9eadf2fd9c55890bbd251f8951d521e2a692",
"0xbf6297162b2a83b9c8d5f2771c1656576d75fa23d124421919310313c01492d8",
"0x52af33bc15010b5b412fba8b52bc870e464e8876cb0cfc99c6612704c8de6ac3",
"0x6934fd881c7fda810e538e313e80b0d3da37a53ad41f7c6a2aecbc62625edc58",
"0xcf18ed8ef0e38ea5c0750b0aeb48d03053413b05a62f1d609804a90c13e2f432",
"0xcb1f59053001ecf0ef8ea211813790b2ac1cc48d0db918651cd01635d27bff53"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

