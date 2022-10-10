import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectinsHomeComponent } from './collectins-home.component';

describe('CollectinsHomeComponent', () => {
  let component: CollectinsHomeComponent;
  let fixture: ComponentFixture<CollectinsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectinsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectinsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
