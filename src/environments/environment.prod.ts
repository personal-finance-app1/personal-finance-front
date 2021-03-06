import { BehaviorSubject, Subject } from "rxjs";
import { Account } from "src/app/models/account";

export const environment = {
  production: true,
  firebaseConfig: 
  { 
    apiKey: "AIzaSyC4sxZlT-McTildwtxa8LV1lj7ZQhzOrs0",
    authDomain: "training-team-253916.firebaseapp.com",
    projectId: "training-team-253916",
    storageBucket: "training-team-253916.appspot.com",
    messagingSenderId: "492701958610",
    appId: "1:492701958610:web:4a30a1be93803701d3480b",
    measurementId: "G-DP6XDH9DTW"
  },

  apiUrl: 'http://ec2-3-229-123-153.compute-1.amazonaws.com:8082/personal-finance'

};

export let account$: BehaviorSubject<Account> = new BehaviorSubject<Account>(new Account(-1,"", "",0,0,0));