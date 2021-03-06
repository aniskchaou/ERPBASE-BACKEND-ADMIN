import { Component, OnInit } from '@angular/core';
import { URLLoader } from '../../../main/configs/URLLoader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends URLLoader implements OnInit {

  constructor() {
    super()
  }


  ngOnInit() {
    super.loadScripts();
  }

}
