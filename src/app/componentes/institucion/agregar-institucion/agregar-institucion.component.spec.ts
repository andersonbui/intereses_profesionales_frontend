import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInstitucionComponent } from './agregar-institucion.component';

describe('AgregarInstitucionComponent', () => {
  let component: AgregarInstitucionComponent;
  let fixture: ComponentFixture<AgregarInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
