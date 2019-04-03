import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SondagesTypeCountComponent} from './sondages-type-count.component';

describe('SondagesTypeCountComponent', () => {
  let component: SondagesTypeCountComponent;
  let fixture: ComponentFixture<SondagesTypeCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SondagesTypeCountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondagesTypeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
