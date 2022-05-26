require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain unknown hunt castle front test'; 
let testAccounts = [
"0x60a388b336176a649dd3891fdc908a7bccceab077095bf13c18a965ee59882a5",
"0x3584d1237e68f57e3bba188f1ae18895cb5d9aa4f69ddb54c4c0a1e8bbeaeb77",
"0xd4c3963996e68f0aa40fbf7bdde0c26fdd796fbb7d62be1c87be2c0fd69c9f7b",
"0xfa6407c295540844adb609016ca61270fd578451e5296c1a8bd8063e28776d17",
"0x5837a3077a1fd64e78000f98e14e6e23dac270cf86752213a49c66a6e3e3cb0c",
"0x58bc81c06db18680056dadff34a7ea1769fe54185258643dd4630226f6d9b054",
"0xd9c13533993d6e3d49494269ccb4ab777e4fd6ccea5d0c514970c7907f40925e",
"0x4fb8f23590750ba524c121a2eaa09f46f64e9248fb7beb0c874c66681540a20a",
"0x794196ba2403697a518ecc1cb539981c78621f52518389414b949e35fe6bd155",
"0xcc3c1d3e8b6d6e1c88fd7ae9c343cd15c34df42e29344dcaf7c8c45e1d63ca29"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


