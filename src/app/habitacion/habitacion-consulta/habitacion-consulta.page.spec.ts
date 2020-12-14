import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabitacionConsultaPage } from './habitacion-consulta.page';

describe('HabitacionConsultaPage', () => {
  let component: HabitacionConsultaPage;
  let fixture: ComponentFixture<HabitacionConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitacionConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
