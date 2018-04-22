import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.login(email, pass);
    console.log('jestem');
    this.router.navigate(['home']);
  }
}
