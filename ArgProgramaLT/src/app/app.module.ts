import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillComponent } from './skill/skill.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { EducacionService } from './services/educacion.service';
import { HeaderService } from './services/header.service';
import { ExperienciaService } from './services/experiencia.service';
import { SkillService } from './services/skill.service';
import { ProyectoService } from './services/proyecto.service';
import { AutenticacionService } from './services/autenticacion.service';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ExperienciaComponent,
    HomeComponent,
    HeaderComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EducacionService,
    HeaderService,
    ExperienciaService,
    SkillService,
    ProyectoService,
    AutenticacionService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
