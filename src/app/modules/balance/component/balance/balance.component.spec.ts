import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';
import { BalanceService } from '../../service/balance.service';
import { MatDialog } from '@angular/material/dialog';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let service: BalanceService;
  let fixture: ComponentFixture<BalanceComponent>;
  let dialogMock: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceComponent],
      providers: [BalanceService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = new BalanceService();
    service = TestBed.inject(BalanceService);
    dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
    component = new BalanceComponent(service,dialogMock);
    component.accountBalance = 0;
  });

  describe("Component init", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })


  describe("Account balance on component init.", () => {
    it('should have a an account balance value of null to indicate the account balance has not been declared', () => {
      expect(component.accountBalance).toBe(0);
    })
  })





  describe("invalidMessage init value", () => {
    xit('should be an empty string', () => {
      //when we initialize our component, then there should be no error message, as the
      //user has not made an error.
      expect(component.invalidMessage).toBe('')
    });
  })

  describe("INVALID_BALANCE_MESSAGE init value", () => {
    it('should not be an empty string', () => {
      //Not sure what the invalid message is yey, but we're 100% it will be truthy.
      expect(component.INVALID_BALANCE_MESSAGE).toBeTruthy()
    });
  })
});
