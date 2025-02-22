import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { AuthService } from '../../service/auth.service';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  user: any = {
    username: null,
    senha: null,
  }

  constructor(private authService: AutenticacaoService) {}

  ngOnInit(): void { }

  login() {
    this.authService.autenticar(this.user.username, this.user.senha).subscribe(() => {
      console.log('Autenticado com sucesso');
    },
    (error: any) => {
      alert("Usuario ou senha invalida");
      console.log(error);
    })
  }


  // form: any = {
  //   username: null,
  //   senha: null
  // };
  // isLoggedIn = false;
  // isLoginFailed = false;
  // errorMessage = '';
  // roles: string[] = [];

  // constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  // ngOnInit(): void {
  //   if (this.tokenStorage.getToken()) {
  //     this.isLoggedIn = true;
  //     this.roles = this.tokenStorage.getUser().roles;
  //   }
  // }

  // onSubmit(): void {
  //   const { username, senha } = this.form;

  //   this.authService.login(username, senha).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }

  // reloadPage(): void {
  //   window.location.reload();
  // }
}

export class GridListOverviewExample {}
