import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  private credential=new BehaviorSubject('');
  credential$=this.credential.asObservable();

  constructor() { }
  setcredential(value:any)
  {
      this.credential.next(value);
      console.log(value);
  }

}
