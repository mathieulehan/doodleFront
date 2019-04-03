import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SondageCountComponent} from './sondage-count.component';

describe('SondageCountComponent', () => {
  let component: SondageCountComponent;
  let fixture: ComponentFixture<SondageCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SondageCountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondageCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
