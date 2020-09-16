import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './pages/login/login-component/login-component.component';
import { ListadoUsuariosComponentComponent } from './pages/user/listado-usuarios-component/listado-usuarios-component.component';
import { DetalleUsuarioComponentComponent } from './pages/user/detalle-usuario-component/detalle-usuario-component.component';
import { DetalleRecursoComponentComponent } from './pages/resource/detalle-recurso-component/detalle-recurso-component.component';
import { ListadoRecursosComponentComponent } from './pages/resource/listado-recursos-component/listado-recursos-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ListadoUsuariosComponentComponent,
    DetalleUsuarioComponentComponent,
    DetalleRecursoComponentComponent,
    ListadoRecursosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
