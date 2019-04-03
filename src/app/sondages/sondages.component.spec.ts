import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SondagesComponent} from './sondages.component';

describe('SondagesComponent', () => {
  let component: SondagesComponent;
  let fixture: ComponentFixture<SondagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SondagesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
