import { Subject } from "rxjs";
import { Account } from "src/app/models/account";

export const environment = {
  production: true
};

export let account$: Subject<Account> = new Subject<Account>();