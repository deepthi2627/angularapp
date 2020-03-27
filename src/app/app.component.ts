import { Component } from '@angular/core';
import * as Papa from 'papaparse';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataList : any[];
  dataListnew : any[];
issueCounter: any;
  ngOnInit(){
    
  }
  
  onChange(files: File[]){
    
    if(files[0]){
      console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result,file) => {
          console.log("result", result);
          this.dataList = result.data;
          this.dataListnew = this.dataList;
        }
      });
    }
  }


  search(){
if(this.issueCounter != ""){
  this.dataListnew = this.dataListnew.filter(searchitem => {
    return searchitem.Issuecount == this.issueCounter
        })
}
else if(this.issueCounter == ""){
  this.dataListnew = this.dataList;
}



    
  }
}
