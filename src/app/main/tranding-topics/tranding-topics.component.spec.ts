import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingTopicsComponent } from './tranding-topics.component';

describe('TrandingTopicsComponent', () => {
  let component: TrandingTopicsComponent;
  let fixture: ComponentFixture<TrandingTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrandingTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrandingTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
