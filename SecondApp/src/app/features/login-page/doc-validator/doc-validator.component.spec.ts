import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocValidatorComponent } from './doc-validator.component';

describe('DocValidatorComponent', () => {
  let component: DocValidatorComponent;
  let fixture: ComponentFixture<DocValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocValidatorComponent]
    });
    fixture = TestBed.createComponent(DocValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
