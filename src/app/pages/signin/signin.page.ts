import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class SigninPage {
  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Form submitted', this.signinForm.value);
    }
  }
} 