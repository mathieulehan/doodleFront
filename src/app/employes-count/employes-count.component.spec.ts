import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployesCountComponent} from './employes-count.component';

describe('EmployesCountComponent', () => {
  let component: EmployesCountComponent;
  let fixture: ComponentFixture<EmployesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployesCountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
