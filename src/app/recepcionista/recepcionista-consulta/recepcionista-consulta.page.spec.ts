import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecepcionistaConsultaPage } from './recepcionista-consulta.page';

describe('RecepcionistaConsultaPage', () => {
  let component: RecepcionistaConsultaPage;
  let fixture: ComponentFixture<RecepcionistaConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionistaConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecepcionistaConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
