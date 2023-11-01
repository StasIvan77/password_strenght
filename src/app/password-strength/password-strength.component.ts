import { Component } from '@angular/core';
import { PasswordServiceService } from '../password-service/password-service.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password = '';
  dataFromServiceMediumPass: boolean;
  dataFromServiceStrongPass: boolean;

  constructor(private passwordService: PasswordServiceService) {
    this.password = this.passwordService.getPassword();
    this.dataFromServiceMediumPass = this.passwordService.isMediumPassword(); 
    this.dataFromServiceStrongPass = this.passwordService.isStrongPassword(); 
    this.calculateStrength();
  }
 

  calculateStrength(): void {
    this.passwordService.setPassword(this.password);
  }

  onPasswordChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    this.password = inputElement.value;
    this.dataFromServiceMediumPass = this.passwordService.isMediumPassword(); 
    this.dataFromServiceStrongPass = this.passwordService.isStrongPassword();     
    this.calculateStrength();
  }
  
}
