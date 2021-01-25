export class Account {
    
    constructor(public userId: number, public accountName: string, public income: number, public expenses: number, public balance: number){
        this.userId = userId;
        this.accountName = accountName;
        this.income = income;
        this.expenses = expenses;
        this.balance = balance;
    }
}
