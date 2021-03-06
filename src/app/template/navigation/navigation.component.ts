import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  sales: boolean = true
  buy: boolean = true
  production: boolean = true
  staff: boolean = true
  accounting: boolean = true
  employees: boolean = true
  fleet: boolean = true
  maintenance: boolean = true
  quality: boolean = true
  payroll: boolean = true
  inventory: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
