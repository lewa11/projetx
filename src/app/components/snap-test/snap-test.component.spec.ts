import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapTestComponent } from './snap-test.component';

describe('SnapTestComponent', () => {
  let component: SnapTestComponent;
  let fixture: ComponentFixture<SnapTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
