import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteConsultaPage } from './cliente-consulta.page';

describe('ClienteConsultaPage', () => {
  let component: ClienteConsultaPage;
  let fixture: ComponentFixture<ClienteConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
