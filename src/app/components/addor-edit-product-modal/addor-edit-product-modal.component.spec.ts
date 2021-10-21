import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorEditProductModalComponent } from './addor-edit-product-modal.component';

describe('AddorEditProductModalComponent', () => {
  let component: AddorEditProductModalComponent;
  let fixture: ComponentFixture<AddorEditProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorEditProductModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorEditProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
