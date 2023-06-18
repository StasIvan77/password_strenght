import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';


  isEasyPassword(): boolean {
    return /^[a-zA-Z0-9]+$/.test(this.password);
  }

  isMediumPassword(): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])|(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(this.password);
  }

  isStrongPassword(): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(this.password);
    
  }

 

  calculateStrength(): void {
    // method called whenever the password changes
  }

  onPasswordChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    this.password = inputElement.value;
    this.calculateStrength();
  }
  
}
