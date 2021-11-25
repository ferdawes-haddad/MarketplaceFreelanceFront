import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthServiceService } from '../Services/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {
  resetForm: FormGroup;
  errors = null;
  successMsg = null;

  constructor(
    public fb: FormBuilder,
    public authService: AuthServiceService
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void { }

  onSubmit(){
    this.authService.sendResetPasswordLink(this.resetForm.value).subscribe(
      (result) => {
        this.successMsg = result;
      },(error) => {
        this.errors = error.error.message;
      })
  }

}