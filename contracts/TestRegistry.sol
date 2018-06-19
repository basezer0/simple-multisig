pragma solidity ^0.4.18;

// This contract is only used for testing purposes.
contract TestRegistry {

  mapping(address => uint) public registry;

  event Register(address indexed user, uint256 value);
  
  function register(uint x) payable public {
    registry[msg.sender] = x;
    emit Register(msg.sender, x);
  }

}
