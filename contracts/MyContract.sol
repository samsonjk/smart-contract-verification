// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MyContract {
    string public greet = "Hello, World!";

    function setGreeting(string memory _greet) public {
        greet = _greet;
    }
}