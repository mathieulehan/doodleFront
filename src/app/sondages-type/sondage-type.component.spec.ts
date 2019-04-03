import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SondageTypeComponent} from './sondage-type.component';

describe('SondageTypeComponent', () => {
  let component: SondageTypeComponent;
  let fixture: ComponentFixture<SondageTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SondageTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
