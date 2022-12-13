import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

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
  

  isShown: boolean = false ; // hidden by default
  isShownn: boolean = false ; // hidden by default


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }

  toggleShoww() {
  
    this.isShownn = ! this.isShownn;
    
    }




  async doSomething(refresher) {

    const res = await axios.get('https://tugasnm.000webhostapp.com/apitest/info.php');
    console.log(res.data);
    this.allData = res.data.result;
    if(refresher != 0)
    refresher.target.complete();  
  }

  async doSomethingg(refresher) {

    const res = await axios.get('https://tugasnm.000webhostapp.com/apitest/info2.php');
    console.log(res.data);
    this.alldata = res.data.result;
    if(refresher != 0)
    refresher.target.complete();  
  }

  ngOnInit() {
  }

}
