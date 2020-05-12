import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaModalComponent } from './usa-modal.component';

describe('UsaModalComponent', () => {
  let component: UsaModalComponent;
  let fixture: ComponentFixture<UsaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
