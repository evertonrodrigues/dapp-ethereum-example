

export default class BaseEmployeeView {
    constructor(contractService) {
        this.contractService = contractService;
        this.addEvents();
        this.showAccounts();
        this.defaultAccount();
    }

    setLoaderDisplay(status) {
        document.querySelector("#loader").style.display = status
    }

    defaultAccount() {
        document.querySelector("#defaultAccount").value = this.contractService.getAccounts()[0];
    }

    showAccounts() {
        const accounts = this.contractService.getAccounts();
        accounts.forEach(account => {
            const li = document.createElement('li');
            const liText = document.createTextNode(account);
            li.appendChild(liText);
            document.querySelector('.accounts').appendChild(li);
        });
    }

    addEvents() {
        document.querySelector('#updateBt').onclick = () => {
            this.setLoaderDisplay('block');
            const employee = this.getEmployee();
            this.contractService.setEmployee(employee)
            this.setLoaderDisplay('none');
        }

        document.querySelector('#setDefaultAccountBt').onclick = () => {
            this.contractService.setDefaultAccount(document.querySelector("#defaultAccount").value);
        }
    }
}