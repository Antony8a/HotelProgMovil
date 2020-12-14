import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabitacionRegistroPage } from './habitacion-registro.page';

describe('HabitacionRegistroPage', () => {
  let component: HabitacionRegistroPage;
  let fixture: ComponentFixture<HabitacionRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitacionRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
