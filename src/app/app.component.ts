import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
  title = 'app';
  data = [];
  constructor(private appService: AppService){
  }
   emailId:any;
   correct=0;
   formVisible = false;
   submit = true;
  onLogin(loginForm:any){
   this.emailId = loginForm.emailId;
   this.appService.getUser().
   subscribe(userdata => this .data = userdata, (error)=> {console.log("Error!!")});
   
   for(let entry of this.data){
     if(this.emailId === entry.EMAIL_ID){
        this.formVisible = true;
     }
   }
  }
  onSubmit(value:any){
    this.submit= false;

    if(value.q1 === "90.29 to 130.05")
      this.correct++;
    if(value.q2 === "100")
      this.correct++;
    if(value.q3 === "standard deviation")
      this.correct++;
    if(value.q4 === "0.1")
      this.correct++;   
    if(value.q5 === "Central Location")
      this.correct++;
    if(value.q6 === "variability")
      this.correct++;
    if(value.q7 === "Ms. Quincy's class is less heterogeneous than Ms. Sweetwater's.")
      this.correct++;   
   if(value.q7 === "Ms. Quincy's class is less heterogeneous than Ms. Sweetwater's.")
      this.correct++;
      if(value.q8 === "All the elements in the population are 25")
      this.correct++;
      if(value.q9 === "78th percentile")
      this.correct++;    
      if(value.q10 === "4, 5, 6, 7")
      this.correct++;
      if(value.q11 === "0.0521")
      this.correct++;
      if(value.q12 === "0.25")
      this.correct++;
      if(value.q13 === "1-(e^-2)")
      this.correct++;
      if(value.q14 === "9")
      this.correct++;
      if(value.q15 === "0.45")
      this.correct++;
     console.log(this.correct);  
  }
}
