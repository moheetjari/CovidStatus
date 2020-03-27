import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpIndiaComponent } from './cmp-india.component';

describe('CmpIndiaComponent', () => {
  let component: CmpIndiaComponent;
  let fixture: ComponentFixture<CmpIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
