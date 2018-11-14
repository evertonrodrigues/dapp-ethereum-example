import Config from '/src/config.js';

export default class BaseContractService{

    constructor(contractInfo){
        this.contract = null;
        if (typeof web3 !== 'undefined') {
            this.web3 = new Web3(web3.currentProvider);
        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider(Config.urlProvider));
        }
        this.createInstance(contractInfo);
    }

    createInstance(contractInfo) {
        this.setDefaultAccount(this.web3.eth.accounts[0]);
        const web3Contract = this.web3.eth.contract(contractInfo.ABI);
        this.contract = web3Contract.at(contractInfo.address);
    }

    getAccounts() {
        return this.web3.eth.accounts;
    }

    setDefaultAccount(address) {
        this.web3.eth.defaultAccount = address;
    }

}