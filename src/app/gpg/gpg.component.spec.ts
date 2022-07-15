import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpgComponent } from './gpg.component';

describe('GpgComponent', () => {
  let component: GpgComponent;
  let fixture: ComponentFixture<GpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
