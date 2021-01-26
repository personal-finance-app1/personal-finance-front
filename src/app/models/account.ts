export class Account {
    
    constructor(public accountId: number, public userId: number, public name: string, public income: number, public expenses: number, public balance: number){
        this.accountId = accountId;
        this.userId = userId;
        this.name = name;
        this.income = income;
        this.expenses = expenses;
        this.balance = balance;
    }
}
