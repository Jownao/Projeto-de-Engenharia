import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { CadastroComponent } from './screens/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { RecuperacaoSenhaComponent } from './screens/recuperacao-senha/recuperacao-senha.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuSimplesComponent } from './components/menu-simples/menu-simples.component';
import { TelaInicialComponent } from './screens/tela-inicial/tela-inicial.component';
import { ToolbarLogadoComponent } from './components/toolbar-logado/toolbar-logado.component';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RecuperacaoSenhaComponent,
    MenuSimplesComponent,
    TelaInicialComponent,
    ToolbarLogadoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
