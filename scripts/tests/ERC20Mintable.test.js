const { ethers, BigNumber } = require("ethers");
const chai = require('chai');
const { expect } = chai
const { solidity } = require("ethereum-waffle");
chai.use(solidity);


describe("ERC20Mintable", async () => {
    const erc20Mintable = await artifacts.initializeInterfaceAt("ERC20Mintable", "ERC20Mintable");

    context("name and symbol functions", async () => {
        it("symbol() should return FXD", async () => {
            const symbol = await erc20Mintable.symbol();
            await expect(
                symbol
            ).to.be.equal("FXD");
        });
        it("name() should return FathomStablecoin", async () => {
            const name = await erc20Mintable.name();
            await expect(
                name
            ).to.be.equal("FathomStablecoin");
        });

    });
});

