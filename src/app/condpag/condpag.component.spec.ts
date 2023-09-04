import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondpagComponent } from './condpag.component';

describe('CondpagComponent', () => {
  let component: CondpagComponent;
  let fixture: ComponentFixture<CondpagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondpagComponent]
    });
    fixture = TestBed.createComponent(CondpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
