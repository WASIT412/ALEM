import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() 
public sidenavtoggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public toggleSideNav(){
this.sidenavtoggle.emit();
  }

}
