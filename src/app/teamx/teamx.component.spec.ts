import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamxComponent } from './teamx.component';

describe('TeamxComponent', () => {
  let component: TeamxComponent;
  let fixture: ComponentFixture<TeamxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
