import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HabitacionesPage } from './menuinicio/habitaciones/habitaciones.page';
import { LoginPage } from './menuinicio/login/login.page';
import { AdminPage } from './menuGestion/admin/admin.page';
import { ClientePage } from './menuGestion/cliente/cliente.page';
import { RecepcionistaPage } from './menuGestion/recepcionista/recepcionista.page';
import { PopinfoPage } from './menupop/popinfo/popinfo.page';
import { ClienteConsultaPage } from './cliente/cliente-consulta/cliente-consulta.page';
import { ClienteRegistroPage } from './cliente/cliente-registro/cliente-registro.page';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HabitacionesPage,
    LoginPage,
    AdminPage,
    ClientePage,
    RecepcionistaPage,
    PopinfoPage,
    ClienteConsultaPage,
    ClienteRegistroPage
  ],
  entryComponents: [
    HabitacionesPage,
    LoginPage,
    AdminPage,
    ClientePage,
    RecepcionistaPage,
    PopinfoPage,
    ClienteConsultaPage,
    ClienteRegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
