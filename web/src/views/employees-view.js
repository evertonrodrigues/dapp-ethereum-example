import EmployeesContractService from '../services/employees-contract-service.js';
import BaseEmployeeView from './base-employee-view.js'

export default class EmployeesView extends BaseEmployeeView {

    constructor() {
        super(new EmployeesContractService());
        this.fillEmployeesList();
        this.employeeAddress = [];
    }

    createEmployeeItem(employee, address) {
        address = employee.address || address;
        if (!this.employeeAddress.find( i=> (i == address))){
            this.employeeAddress.push(address);
            const li = document.createElement('li');
            li.setAttribute('id', address);
            const liText = document.createTextNode(`${employee.fName} ${employee.lName}. ${employee.age} years old. Adress ${address}`);
            li.appendChild(liText);
            document.querySelector('.employeesList').appendChild(li);
        }
    }

    fillEmployeesList() {
        this.contractService.getEmployees().then(employees => {
            employees.forEach(employeeAddress => {
                this.contractService.getEmployee(employeeAddress).then(employee => {
                    this.createEmployeeItem(employee, employeeAddress);
                })
            });
        }).catch(err => {
            alert(err);
        });
    }

    getEmployee() {
        return {
            address: document.querySelector("#address").value,
            fName: document.querySelector('#fName').value,
            lName: document.querySelector('#lName').value,
            age: document.querySelector('#age').value
        }
    }

    addEvents() {
        super.addEvents();
        this.contractService.EmployeeInfoEvent.watch((err, result) => {
            if (!err) {
                if (result.blockHash != document.querySelector("#transaction").innerText) {
                    this.setLoaderDisplay('none');
                }
                document.querySelector('#transaction').innerText = `Block hash: ${result.blockHash}`;
                this.createEmployeeItem({ fName: result.args.fName, lName: result.args.lName, age: result.args.age, address: result.args._address });
            } else {
                this.setLoaderDisplay('none');
                alert(err);
            }
        });
    }
}
