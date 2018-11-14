import EmployeeContractService from '../services/employee-contract-service.js';
import BaseEmployeeView from './base-employee-view.js'

export default class EmployeeView extends BaseEmployeeView{

    constructor() {
        super(new EmployeeContractService());
        this.fillEmployeeInfo();
    }

    fillEmployeeInfo() {
        this.contractService.getEmployee().then(employee => {
            document.querySelector('#employee').innerText = `${employee.name} (${employee.age} years old)`;
        }).catch(err => {
            alert(err);
        });
    }

    getEmployee() {
        return {
            name: document.querySelector('#name').value,
            age: document.querySelector('#age').value
        }
    }

    addEvents() {
        super.addEvents();
        this.contractService.EmployeeInfoEvent.watch((err, result) => {
            if (!err) {
                this.setLoaderDisplay('none');
                document.querySelector('#employee').innerText = `${result.args.name} (${result.args.age} years old)`;
            } else {
                this.setLoaderDisplay('none');
                alert(err);
            }
        });

    }
}