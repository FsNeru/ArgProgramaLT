import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillComponent } from './skill/skill.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ExperienciaComponent,
    LoginComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
