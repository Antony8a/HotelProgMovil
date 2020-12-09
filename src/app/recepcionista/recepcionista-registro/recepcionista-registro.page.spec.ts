import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecepcionistaRegistroPage } from './recepcionista-registro.page';

describe('RecepcionistaRegistroPage', () => {
  let component: RecepcionistaRegistroPage;
  let fixture: ComponentFixture<RecepcionistaRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionistaRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecepcionistaRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
