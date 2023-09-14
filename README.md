# hackathon

This project leverages the gated-nft-tutorial-starter for the zksync hackathon. 

The goal is to add a email verification to allow people on an email list to be eligible for gas-less transactions

Currently the logic allows for gas to be paid on behalf of email subscribers. 

You would need to set up the email server and initialize the front end 

We are excited that this project was awarded a bounty!

Video
https://www.loom.com/share/a04751732c904c3e9ff1f00dc310223e?sid=e5667eb6-b6ca-412f-8b20-4bc6e6f63809

We modified the Paymaster contract so that it will pay for the user's gas fees if 1) they own the NFT contract (same logic as the tutorial), and 2) the email hash + email signature match the public address of the server using ZK Sync Era's SDK for Signature Checker.

We have a back-end server that has email addresses and hashes with the private key to produce a signature. The solidity contract then compares the email address, the signature and the public key to return a boolean true or false.

In particular, the Paymaster Contract was modified to include a verifyServerSignature function. The verifyServerSignature function takes in the emailHash (hashed email), serverSignature (hashed email and private key), and serverAddress to return a true or false. The serverAddress is compared to the expected serverAddress from the emailHash and the serverSignature.

The true or false is then used to decide whether or not the Paymaster will pay for the gas fees for the transaction.

In our demo, someone with their email in the email subscription will get be able to change the greeting without using fees.

Purpose: Email for e-commerce merchants is often a large driver of order conversion. Emails sent out by merchants often get orders from customers that capitalize on new deals or reminder of the great products that the merchant offers. This allows e-commerce merchants to offer potential customers another reason to sign-up to the email newsletter and obtain customized web3 experiences. The emails are not stored on-chain. The emails are stored in an off-chain email server but use the cryptography to provide gas-less experiences to users that are on the email list.


