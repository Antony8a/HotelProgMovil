import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabitacionEditaPage } from './habitacion-edita.page';

describe('HabitacionEditaPage', () => {
  let component: HabitacionEditaPage;
  let fixture: ComponentFixture<HabitacionEditaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionEditaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitacionEditaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
