import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  VkontakteLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login-v2';
import { AppComponent } from 'src/app/app.component';
import { AppPage } from 'e2e/src/app.po';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'linkedin') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'vkontakte') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);
        // Now sign-in with userData
        // ...

      }
    );
  }
  ngOnInit() {
  }

  login() {
    // console.log('mensaje de login');
    // this.app.getRootNav().setRoot(LoginPage); 
    // this.navCtrl.setRoot('TabsPage', {}, { animate: true, direction: 'forward' });
  }

}
