const { privateToPublic, toChecksumAddress } = require('ethereumjs-util');
const crypto = require('crypto');

// Generate a random 32-byte private key
const randomPrivateKey = crypto.randomBytes(32);

// Convert the private key to a hexadecimal string
const privateKeyHex = '0x' + randomPrivateKey.toString('hex');

console.log('Random Private Key:', privateKeyHex);

// Replace this with your actual private key
const frontendPrivateKey = privateKeyHex;

// Convert the private key to a Buffer
const privateKeyBuffer = Buffer.from(frontendPrivateKey, 'hex');

// Derive the public key from the private key
const publicKeyBuffer = privateToPublic(privateKeyBuffer);

// Convert the public key to an Ethereum address
const ethereumAddress = toChecksumAddress(publicKeyBuffer.toString('hex'));

console.log('Frontend Ethereum Address:', ethereumAddress);

