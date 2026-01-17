import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDashhComponent } from './players-dashh.component';

describe('PlayersDashhComponent', () => {
  let component: PlayersDashhComponent;
  let fixture: ComponentFixture<PlayersDashhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersDashhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersDashhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
