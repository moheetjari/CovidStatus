import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAllCasesComponent } from './cmp-all-cases.component';

describe('CmpAllCasesComponent', () => {
  let component: CmpAllCasesComponent;
  let fixture: ComponentFixture<CmpAllCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpAllCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpAllCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
