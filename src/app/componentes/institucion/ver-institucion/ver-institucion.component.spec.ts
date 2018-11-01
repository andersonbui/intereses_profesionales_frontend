import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInstitucionComponent } from './ver-institucion.component';

describe('VerInstitucionComponent', () => {
  let component: VerInstitucionComponent;
  let fixture: ComponentFixture<VerInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
