import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareBalanceComponent } from './declare-balance.component';

describe('DeclareBalanceComponent', () => {
  let component: DeclareBalanceComponent;
  let fixture: ComponentFixture<DeclareBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareBalanceComponent ]
    })
    .compileComponents();
  });

  

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
