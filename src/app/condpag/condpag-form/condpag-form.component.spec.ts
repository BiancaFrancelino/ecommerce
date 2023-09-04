import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondpagFormComponent } from './condpag-form.component';

describe('CondpagFormComponent', () => {
  let component: CondpagFormComponent;
  let fixture: ComponentFixture<CondpagFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondpagFormComponent]
    });
    fixture = TestBed.createComponent(CondpagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
