import { Injectable } from '@angular/core';
import { compareAsc, format } from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  prepareContext(data:any){


    let htmlContent = `<head> <title>`+`Print Your Doc`+` Tar Report</title>
    <style type="text/css" media="print">
        @page{ size: auto; /* auto is the initial value */ 
        margin: 2mm 1mm 0mm 0mm; /* this affects the margin in the printer settings */ }
        thead{display: table-header-group;}tfoot{display: table-footer-group;}
        </style>
        <style type="text/css" media="screen"> 
        thead {display: block; }
        tfoot {display: block;}                                         
        </style></head><body>`;


     htmlContent += `

     <body>
      <h2>Welcome to the .....</h2>
     </body>
     ` 
             
      
        return htmlContent;
    }



    fstring(str: string) {
      return str ? str : '';
  }
  fdate(str: Date) {
      return str ? format(str, 'MM/DD/YYYY') : '';
  }
  ftime(str: string) {
      return str ? format(str, 'h:mm A') : '';
  }
  roomCheck(str: string) {
      if (str == null || str == "") {
          return "Waiting Room";
      }
      else {
          return str;
      }
  }

}
