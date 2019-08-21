import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydreamapp';
  isshow:boolean = false;

  setshow()
  {
    if(this.isshow == true)
    {
      this.isshow = false;

    }else
    {
      this.isshow = true;
    }
  }
}
