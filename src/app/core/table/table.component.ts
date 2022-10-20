import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  userForm:FormGroup;
  listData:any;


  constructor(private fb:FormBuilder) {
    this.listData=[];
    this.userForm=this.fb.group({
      task:['',Validators.required],
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      status:['',Validators.required],
      priority:['',Validators.required,Validators.min(1),"Priority Should be min 1"]
    })
   }
   public addItem():void{
     this.listData.push(this.userForm.value);
     this.userForm.reset();
   }
   reset(){
    this.userForm.reset();

   }

  ngOnInit(): void {
  }

}
