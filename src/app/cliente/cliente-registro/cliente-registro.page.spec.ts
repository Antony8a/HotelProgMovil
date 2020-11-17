import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteRegistroPage } from './cliente-registro.page';

describe('ClienteRegistroPage', () => {
  let component: ClienteRegistroPage;
  let fixture: ComponentFixture<ClienteRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
