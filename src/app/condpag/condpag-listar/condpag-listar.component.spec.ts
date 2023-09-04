import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondpagListarComponent } from './condpag-listar.component';

describe('CondpagListarComponent', () => {
  let component: CondpagListarComponent;
  let fixture: ComponentFixture<CondpagListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondpagListarComponent]
    });
    fixture = TestBed.createComponent(CondpagListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
