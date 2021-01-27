/**
 * The account object used to represent each account throughout the application.
 */
export class Account {
    
    /**
     * Used to create a new instance of the Account model
     * @param accountId - The Primary key of the account stored on the database
     * @param userId - The unique string representing the user. (Retrieved from Firebase)
     * @param name - The full (first and last) name of the user.
     * @param income - The income value of the account, in cents.
     * @param expenses - The expense value of the account, in cents.
     * @param balance - The balance value of the account, in cents.
     */
    constructor(public accountId: number, public userId: string, public name: string, public income: number, public expenses: number, public balance: number) {
        this.accountId = accountId;
        this.userId = userId;
        this.name = name;
        this.income = income;
        this.expenses = expenses;
        this.balance = balance;
    }
}
