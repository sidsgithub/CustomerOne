import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeDuplicationComponent } from './de-duplication.component';

describe('DeDuplicationComponent', () => {
  let component: DeDuplicationComponent;
  let fixture: ComponentFixture<DeDuplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeDuplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeDuplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
