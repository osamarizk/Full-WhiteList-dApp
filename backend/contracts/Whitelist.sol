//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Whitelist {
    // max number of whitelist allowed
    uint8 public maxWhitelistedAddresses;

    //create mapping of whitelistedAddresses
    //if an address is whitelisted , we would set it to true.
    //it is false by default
    mapping(address => bool) public whitelistedAddresses;

    // numberAddressesWhitelisted would be used to keep track
    //how many addresses added to whitlistedAddresses.
    uint8 public numAddressesWhitelisted;

    //setting the max number of whitelist addresses
    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddresses[msg.sender],
            "Sender has already been whitelisted"
        );
        require(
            numAddressesWhitelisted < maxWhitelistedAddresses,
            "limit reached"
        );

        //add the address that call that function to whitelistedaddresses
        whitelistedAddresses[msg.sender] = true;
        // increase number of whitelisted addresses
        numAddressesWhitelisted += 1;
    }
}
