pragma solidity ^0.4.18;

contract Owned{
    address owner;
    
    constructor() public{
        owner = msg.sender;
    }
    
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner of the contract could use this function");
        _;
    }
}

contract Employees is Owned{

    struct Employee {
        uint age;
        string fName;
        string lName;        
    }

    mapping (address => Employee) employees;
    address[] public employeesAccounts;
    
    event EmployeeInfo(
        string fName,
        string lName,
        uint age,
        address _address
    );

    function setEmployee(address _address, uint _age, string _fName, string _lName) onlyOwner public {
        Employee storage employee = employees[_address];
        employee.age = _age;
        employee.fName = _fName;
        employee.lName = _lName;

        employeesAccounts.push(_address) -1;
        emit EmployeeInfo(_fName,_lName,_age, _address);
    }

    function getEmployees() view public returns(address[]){
        return employeesAccounts;
    }
    
    function getEmployee(address _address) view public returns(uint, string, string){
        return(employees[_address].age,employees[_address].fName,employees[_address].lName);
    }
    
    function countEmployees() view public returns(uint){
        return employeesAccounts.length;
    }

}