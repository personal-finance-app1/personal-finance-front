import { BehaviorSubject, Subject } from "rxjs";
import { Account } from "src/app/models/account";

export const environment = {
  production: true
};

export let account$: BehaviorSubject<Account> = new BehaviorSubject<Account>(new Account(-1,0, "",0,0,0));