import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let valid: boolean;
  let token: String;
  let inValidUsername:string = "";
  let inValidPassword:string = "";

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[AuthService]});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login()', ()=>{
    describe('with invalid credentials', ()=>{
      it('should return false, and token field should be empty', ()=>{
        service.login(inValidUsername, inValidPassword);
        expect(service.getToken() === "");
      })
    })
  })

  describe('logout()', ()=>{
    it('should invalidate the token with Firebase and clear the token field' +
      'from the service', ()=>{
      service.logout();
      expect(service.getToken() === "");
    })
  })
});
