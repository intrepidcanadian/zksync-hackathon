# hackathon

This project leverages the gated-nft-tutorial-starter for the zksync hackathon. 

The goal is to add a email verification to allow people on an email list to be eligible for gas-less transactions

Currently the logic allows for gas to be paid on behalf of email subscribers. However, would need to remove the logic on NFT ownership on solidity to make it either/or.

"    require(
                nft_asset.balanceOf(userAddress) > 0,
                "User does not hold the required NFT asset and therefore must pay for their own gas!"
            );

" 

This line is still within the solidity contract

# gated-nft-tutorial-starter 💥🎉

This repository serves as a starter template for developing a dApp that interacts with a 
gated NFT paymaster contract.

## Official Links 🔗

For more information and support, visit our official channels:

- [Website](https://zksync.io/)
- [Documentation](https://v2-docs.zksync.io/dev/)
- [GitHub](https://github.com/matter-labs)
- [Twitter](https://twitter.com/zksync)
- [Discord](https://discord.gg/nMaPGrDDwk)

Jump in, and let's make the most of paymasters together! 🚀
