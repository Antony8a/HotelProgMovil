import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBarStyle,Plugins } from '@capacitor/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Habitaciones',
      url: '/habitaciones',
      icon: 'business'
    },
    {
      title: 'Logueo',
      url: '/login',
      icon: 'person-circle'
    }
  ];
  public labels = ['remembernoob','daantoma'];

  constructor(
    private platform: Platform
    
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: StatusBarStyle.Light });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#CDCDCD' });
      }
    } catch (err) {
      console.log('This is normal in a browser', err);
    }
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
