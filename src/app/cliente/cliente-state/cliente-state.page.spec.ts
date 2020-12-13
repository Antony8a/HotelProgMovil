import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteStatePage } from './cliente-state.page';

describe('ClienteStatePage', () => {
  let component: ClienteStatePage;
  let fixture: ComponentFixture<ClienteStatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteStatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteStatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
