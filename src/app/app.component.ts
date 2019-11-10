import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'template-driven-form';
  topics=['Angular', 'Vue', 'React'];
  errorMessage='';

  constructor(private __enrol:EnrollmentService){}

  userModel=new User('Sajid Javed', 'engr.maliksajidkhan@gmail.com', '03099246697', 'Vue', 'Evening(5PM-8PM)', true);

  onSubmit(){
    this.__enrol.enrol(this.userModel)
    .subscribe(
      data => console.log("Success"+ data),
      error=> this.errorMessage = error
    )
  }
}
