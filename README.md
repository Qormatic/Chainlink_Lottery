# Raffle Contract Description

Allow user to enter the lottery (by paying some amount)
Pick a random winner (using Chainlink randomness)
Winner to be selected every X minutes (using Chainlink Keepers for event execution)

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

VRF Subscription: https://vrf.chain.link/goerli/6233
Upkeeper: https://automation.chain.link/goerli/15822257784561729043081664380917226593531536691780817650607624699212913394197
