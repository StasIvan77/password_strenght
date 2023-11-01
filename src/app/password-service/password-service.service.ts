import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {
  private password: string = '';

  setPassword(password: string){
    this.password = password;
  }

  getPassword(): string {
    return this.password;
  }

  isEasyPassword(): boolean {
    return /^[a-zA-Z0-9]+$/.test(this.password);
  }

  isMediumPassword(): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])|(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(this.password);
  }

  isStrongPassword(): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(this.password);
    
  }

  

}
