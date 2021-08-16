# Abstract:

This is a decentralized e-commerce application, it includes the basic functions customers will need for online shopping including place order and review previous orders.

# Versions:

1. Node.js version: v12.18.2,
2. Ganache version: 2.5.4,
3. Solidity version: >=0.4.22 <0.8.0, pragma experimental ABIEncoderV2,
4. web3 version: : 1.3.1,
5. Truffle version: : v5.1.59,

Please open a terminal at the folder of this project, make sure you have installed npm, nodejs, truffle, lite-server, Ganache and Metamask.

Ganache 2.5.4 for Win Users: https://www.trufflesuite.com/ganache
Metamask:
Chrome:https://metamask.io/download.html
Fire Fox: https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/
NodeJS: https://nodejs.org/en/download/

## Setup Ganache and MetaMask

1. Create a Workspace

![home](https://raw.githubusercontent.com/jackychencw/ethershop/main/imgs/ganache-home-empty.png)

2. Main Interface
   ![interface](https://raw.githubusercontent.com/jackychencw/ethershop/main/imgs/ganache-accounts.png)

# Setup Server

### Install npm packages

```
npm install
```

### Install Truffle

You will need truffle for this project, Truffle is a famous blockchain framework that uses Ethereum Virtual Machine (EVM)
To install, simply run

```
npm install -g truffle
```

### Compile and migrate contract

```
truffle compile

truffle migrate
```

# Start app

```
npm run start
```

or

```
yarn start
```

# Use the app

Once the program starts, you can start browsing items and make purchase, or you can review your previous orders.
