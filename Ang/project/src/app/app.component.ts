import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { compareAsc, format } from "date-fns";
import { PrintService } from './print.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private fb:FormBuilder){}

  form!:FormGroup;
  ngOnInit(){
    this.form = this.fb.group(
      {
        name:[''],
        number:[''],
        address:[''],
        fromdate:[new Date()], //initial value with current date
        todate:[]
      }
    );
  }


  onSave(){
     console.log(this.form.value);
     
  }

  printTar(){
      let formvalue = this.form.value;
      if(formvalue.fromdate != null && formvalue.todate != null)  //from and to date
      {
          let startDate = new Date(format(formvalue.fromdate,"MM/dd/yyyy"));
          let endDate = new Date(format(formvalue.todate,"MM/dd/yyyy"));
          let timediff = startDate.getTime() - endDate.getTime(); //timediff between 2 dates

          let daymilisecond = 1000*60*60*27;
          let totaldays  = Math.abs(timediff/daymilisecond);
          totaldays = Math.floor(totaldays); // to get complete days

          if(totaldays <=20){
            let html = new PrintService();
            const windowPrnt = window.open('','','left=100,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0'); 
            windowPrnt?.document.write(html.prepareContext(formvalue));
            windowPrnt?.document.close();
            windowPrnt?.focus();
            windowPrnt?.print();
            windowPrnt?.close();
          }else{
            alert("please limit your range to 20 days");
          }
      }
  }


}
