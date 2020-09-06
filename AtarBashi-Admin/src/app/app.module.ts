import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ErrorInterceptorProvider } from './Services/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION,
  NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

  const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    pbColor: 'red',
    //
    bgsColor: 'red',
    bgsPosition: POSITION.bottomRight,
    bgsSize: 70,
    //
    fgsPosition: POSITION.bottomRight,
    fgsSize: 70,
    fgsColor: 'red',
    bgsType: SPINNER.doubleBounce,
    fgsType: SPINNER.doubleBounce,
    pbDirection: PB_DIRECTION.leftToRight,
    pbThickness: 4,
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing'

    }),
    HttpClientModule,

    // import NgxUI-LoaderModule
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
    // NgProgressModule.withConfig({
    //   trickleSpeed: 200,
    //   thick: true,
    //   min: 0,
    //   max: 100,
    //   color: 'red'
    // }),
    // NgProgressHttpModule,
    // NgProgressRouterModule

  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }