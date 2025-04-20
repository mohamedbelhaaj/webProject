import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseigantsComponent } from './enseigants.component';

describe('EnseigantsComponent', () => {
  let component: EnseigantsComponent;
  let fixture: ComponentFixture<EnseigantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnseigantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseigantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
