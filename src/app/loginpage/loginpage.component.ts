import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatPseudoCheckbox } from '@angular/material/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDividerModule,CommonModule,
    MatPseudoCheckbox
  ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
  animations: [
    trigger('transitionMessages', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginpageComponent {

  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isAdmin: [false]
    });
  }
  toggleAdmin() {
    const isAdminControl = this.loginForm.get('isAdmin');
    isAdminControl?.setValue(!isAdminControl?.value);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // Handle authentication logic here
    } else {
      console.log('Form is not valid');
    }
  }
}
