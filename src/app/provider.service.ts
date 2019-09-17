import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  email : string
  password : string
  confirmPassword : string
  name : string
  gender: string
  bday: string
  insurance: string
  
  constructor() { }
}

