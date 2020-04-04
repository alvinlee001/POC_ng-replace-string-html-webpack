import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateTagComponent } from './translate-tag.component';

describe('TranslateTagComponent', () => {
  let component: TranslateTagComponent;
  let fixture: ComponentFixture<TranslateTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
