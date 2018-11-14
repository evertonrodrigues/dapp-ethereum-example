pragma solidity ^0.4.18;

contract Employee{

    string name;
    uint age;
    address owner;

    event EmployeeInfo(
        string name,
        uint age
    );

    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner could access this function");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function setEmployee(string _name, uint _age) onlyOwner public{
        name = _name;
        age = _age;
        emit EmployeeInfo(name, age);
    }

    function getEmployee() public constant returns (string, uint){
        return(name, age);
    }

}