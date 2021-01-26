// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { BehaviorSubject, Subject } from "rxjs";
import { Account } from "src/app/models/account";

export const environment = {
  production: false,
  firebaseConfig: 
  { 
    apiKey: String, 
    authDomain: String, 
    projectId: String, 
    storageBucket: String, 
    messagingSenderId: String, 
    appId: String, 
    measurementId: String
  },

  //apiUrl: 'http://ec2-3-229-123-153.compute-1.amazonaws.com:8082/personal-finance'
  apiUrl: 'http://localhost:8082/personal-finance'
};

export let account$: BehaviorSubject<Account> = new BehaviorSubject<Account>(new Account(-1,0, "",0,0,0));



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
