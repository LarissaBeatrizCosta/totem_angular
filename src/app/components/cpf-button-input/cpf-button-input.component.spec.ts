import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfButtonInputComponent } from './cpf-button-input.component';

describe('CpfButtonInputComponent', () => {
  let component: CpfButtonInputComponent;
  let fixture: ComponentFixture<CpfButtonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpfButtonInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfButtonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
