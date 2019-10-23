import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// NGRX
import { Store } from '@ngrx/store';
import { GlobalState } from '../../app.module';

// ACTIONS
import { StartLoginAction } from 'src/app/store/actions/user.actions';
import { selectloginLoading } from 'src/app/store/selectors/user.selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  loginForm : FormGroup;
  loadingSpinnerState$ : Subscription;
  loadingState : boolean;

  constructor(
    private fb : FormBuilder,
    private store : Store<GlobalState>
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username' : this.fb.control('', [Validators.required]),
      'password' : this.fb.control('', [Validators.required])
    });

    // LOADING SPINNER
    this.loadingSpinnerState$ = this.store.select(selectloginLoading).subscribe(res => this.loadingState = res);
    
  }

  ngOnDestroy() {

    this.loadingSpinnerState$.unsubscribe();
  }

  get username() {
    return this.loginForm.get('username') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(new StartLoginAction({username : this.username.value, password : this.password.value}));

      // RESET FORM.
      this.loginForm.reset();
      this.username.markAsPending();
      this.password.markAsPending();
    }
  }

}
