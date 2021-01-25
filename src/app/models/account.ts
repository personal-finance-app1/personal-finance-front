export class Account {
    
    constructor(public id: number, public income: number, public expenses: number, public balance: number){
        this.id = id;
        this.income = income;
        this.expenses = expenses;
        this.balance = balance;
    }
}
