import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzCompComponent } from './nz-comp.component';

describe('NzCompComponent', () => {
  let component: NzCompComponent;
  let fixture: ComponentFixture<NzCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
