import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class AuthService {
  
  constructor(
    private storage: LocalStorageService
  ) {
  }
  
  login() {
    
  }
  
  logout() {
    this.storage.clear();
  }
  
  signup() {
    
  }
    
}
