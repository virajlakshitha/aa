import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openTab(event, type){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementById("content_form");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(type).style.display = "block";
    event.currentTarget.className += " active";
  }

  ab(param){
    if(param == "log"){
      document.getElementById("log").style.display = "none";
      document.getElementById("reg").style.display = "block";
    }
    else if(param == "reg"){
      document.getElementById("reg").style.display = "none";
      document.getElementById("log").style.display = "block";
    }
  }
}
