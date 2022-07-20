//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {
    //maximum number of addresses which can be whitelisted
    uint8 public maxWhitelistedAddresses;

    //keep track of number of addresses whitelisted till now
    uint8 public numAddressesWhitelisted;

    mapping(address => bool) public whitelistedAddresses;

    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    /**
        addAddressToWhitelist - This function adds the address of the sender to the
        whitelist
     */

    function addAddressToWhitelist() public {
        //msg.sender is the address of the user who called this function

        require(
            !whitelistedAddresses[msg.sender],
            "Sender already in the whitelisted"
        );
        require(
            numAddressesWhitelisted < maxWhitelistedAddresses,
            "Max limit reached"
        );
        // Add the address which called the function to the whitelistedAddress array
        whitelistedAddresses[msg.sender] = true;
        // Increase the number of whitelisted addresses
        numAddressesWhitelisted += 1;
    }
}

//Whitelist Contract Address: 0x7315331209F9614a6C840cf2B5384E2D87C627E6
