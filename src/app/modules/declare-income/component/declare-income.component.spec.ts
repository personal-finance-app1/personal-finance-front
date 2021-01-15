import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareIncomeService } from '../service/declare-income.service';

import { DeclareIncomeComponent } from './declare-income.component';

import { Http } from '@angular/http';

describe('DeclareIncomeComponent', () => {
  let component: DeclareIncomeComponent;
  let fixture: ComponentFixture<DeclareIncomeComponent>;
  let service: DeclareIncomeService;
  let spy: any;

  var jasmineHttpServerSpy = require('jasmine-http-server-spy');

  // describe('Test', function() {
  //   beforeAll(function(done) {
  //     this.httpSpy = jasmineHttpServerSpy.createSpyObj('mockServer', [
  //       {
  //         method: 'put',
  //         url: '/some-url-to-mock', // The url of the put request we make
  //         handlerName: 'getSomeUrlToMock' //
  //       }
  //     ]);
  //     this.httpSpy.server.start(8082, done);
  //     // you can pass jasmine 'done' function as a callback, or use returned promise
  //     // this.httpSpy.server.start(8082).then(done, done.fail);
  //     // you can also specify the hostname to start the server on:
  //     // this.httpSpy.server.start(8082, '127.0.0.1').then(done, done.fail);
  //     // this is useful if you need to test multiple servers listening on the same port
  //   });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(DeclareIncomeService);

    //component.onSubmit(); //Setting any sort of values if we had any
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   

  describe('onSubmit method', () => {
    it('should call the sendIncome method in the declare-incomeService', () => { // Successful
      spy = spyOn(service, 'sendIncome');
      component.onSubmit();
      expect(spy).toHaveBeenCalled();
    });

    it('should test http spy', () => { // Successful
      spy = spyOn(Http, 'put');
      component.onSubmit();
      expect(spy).toHaveBeenCalled();
    });


    
    xit('should have userInput', () => { // Successful
      //component.userInput = 15;
      expect(component.userInput).toBeTruthy();
    });

    xit('if userInput is null', () => { // Negative
      //component.userInput = null;
      expect(component.userInput).toBeFalsy();
    });

    xit('if userInput is negative', () => { // Negative
      expect(component.userInput).toBeLessThan(0);
    });

    xit('if userInput is incorrectly using the decimal', () => { // Negative
      expect(component.userInput).toBeFalsy();
    });
  });

});

// $150.005
// $150.01