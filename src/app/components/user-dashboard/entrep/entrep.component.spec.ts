import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepComponent } from './entrep.component';

describe('EntrepComponent', () => {
  let component: EntrepComponent;
  let fixture: ComponentFixture<EntrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
