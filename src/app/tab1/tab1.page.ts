import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public allData = [];
  public alldata = [];

  constructor(private route: Router) {
    //  const tabs = document.querySelectorAll('ion-tab-bar');
    // Object.keys(tabs).map((key) => {
    //   tabs[key].style.display = 'none';
    // });
    this.doSomething(0);
    this.doSomethingg(0);
  }

  logout() {
    this.route.navigate(['login']);
  }
  
  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}

  async doSomething(refresher) {

    const res = await axios.get('https://tugasnm.000webhostapp.com/apitest/getdata.php');
    console.log(res.data);
    this.allData = res.data.result;
    if(refresher != 0)
    refresher.target.complete();  
  }


  async doSomethingg(refresher) {

    const res = await axios.get('https://tugasnm.000webhostapp.com/apitest/get.php');
    console.log(res.data);
    this.alldata = res.data.result;
    if(refresher != 0)
    refresher.target.complete();  
  }




}
