export default {
    urlProvider: "http://localhost:8545",
    employeeContract: {
        //Get the Address of contract deploy by remix ide on Run tab     
        address: '0x1e9e3c80ecfcb84094309bc7ab01d9426c3fc527',
        //Get the ABI(Application Binary Interface) from remix ide on compile tab
        ABI: [
            {
                "constant": true,
                "inputs": [],
                "name": "getEmployee",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    },
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_age",
                        "type": "uint256"
                    }
                ],
                "name": "setEmployee",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "age",
                        "type": "uint256"
                    }
                ],
                "name": "EmployeeInfo",
                "type": "event"
            }
        ]
    },
    employeesContract:{
        address: '0xa71ccd138df67e1e0d4bf8dd3f48f2be8f3f8e70',
        ABI:[
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "fName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "lName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "age",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_address",
                        "type": "address"
                    }
                ],
                "name": "EmployeeInfo",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_address",
                        "type": "address"
                    },
                    {
                        "name": "_age",
                        "type": "uint256"
                    },
                    {
                        "name": "_fName",
                        "type": "string"
                    },
                    {
                        "name": "_lName",
                        "type": "string"
                    }
                ],
                "name": "setEmployee",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "countEmployees",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "employeesAccounts",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_address",
                        "type": "address"
                    }
                ],
                "name": "getEmployee",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "name": "",
                        "type": "string"
                    },
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getEmployees",
                "outputs": [
                    {
                        "name": "",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
    }
}