import BaseContractService from './base-contract-service.js';
import Config from '/src/config.js';

export default class EmployeeContractService extends BaseContractService{

    constructor() {
        super(Config.employeeContract)
        this.EmployeeInfoEvent = this.contract.EmployeeInfo();
    }

    getAccounts() {
        return this.web3.eth.accounts;
    }

    getEmployee() {
        return new Promise((resolve, reject) => {
            this.contract.getEmployee((err, result) => {
                if (err) reject(err);
                if (result && result.length) resolve({ name: result[0], age: result[1] });
            });
        });
    }

    setEmployee(employee) {
        return new Promise((resolve, reject) => {
            this.contract.setEmployee(employee.name, employee.age, (err, res) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

}