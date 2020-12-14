import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabitacionStatePage } from './habitacion-state.page';

describe('HabitacionStatePage', () => {
  let component: HabitacionStatePage;
  let fixture: ComponentFixture<HabitacionStatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionStatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitacionStatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
