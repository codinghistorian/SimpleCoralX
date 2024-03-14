const ERC20Mintable = artifacts.require('ERC20Mintable.sol');

module.exports = async function (deployer) {
    let promises = [
        deployer.deploy(ERC20Mintable, "FathomStablecoin", "FXD", { gas: 7050000 }),
    ];

    await Promise.all(promises);

    console.log("FXD stablecoin address is " + ERC20Mintable.address);

    // you can use below syntax to get an instance of already deployed smart contract.
    // const erc20Mintable = await artifacts.initializeInterfaceAt("ERC20Mintable", "ERC20Mintable");

};