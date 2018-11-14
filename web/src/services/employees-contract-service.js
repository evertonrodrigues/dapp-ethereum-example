import BaseContractService from './base-contract-service.js';
import Config from '/src/config.js';

export default class EmployeesContractService extends BaseContractService {

    constructor() {
        super(Config.employeesContract);
        this.EmployeeInfoEvent = this.contract.EmployeeInfo();
    }

    getEmployee(address) {
        return new Promise((resolve, reject) => {
            this.contract.getEmployee(address, (err, result) => {
                if (err) reject(err);
                if (result && result.length) resolve({ age: result[0], fName: result[1], lName: result[2] });
            });
        });
    }

    setEmployee(employee) {
        return this.contract.setEmployee.sendTransaction(
            employee.address, 
            employee.age, 
            employee.fName, 
            employee.lName,{gas: 300000});
    }

    getEmployees() {
        return new Promise((resolve, reject) => {
            this.contract.getEmployees((err, result) => {
                if(err) reject(err);
                if(result && result.length) resolve(result);
            })
        });
    }

    countEmployees() {
        return this.contract.countEmployees();
    }

}