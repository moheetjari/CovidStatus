import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpHistoryByCountryComponent } from './cmp-history-by-country.component';

describe('CmpHistoryByCountryComponent', () => {
  let component: CmpHistoryByCountryComponent;
  let fixture: ComponentFixture<CmpHistoryByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpHistoryByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpHistoryByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
