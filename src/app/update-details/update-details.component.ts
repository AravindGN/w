import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
datas:any;
items:any=[];
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.datas= new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
    number: new FormControl(),
      course: new FormControl()
    })

    this.service.singleData().subscribe(
      (Response) => {
        this.items[0]=(Response);
        this.setData();
      },
      (error) => {
        console.log(error);
      }); 

  }

  setData() {
    this.datas.setValue({
      name: this.items[0].name,
      address: this.items[0].address,
      number: this.items[0].number,
      course: this.items[0].course
    })
    

  }

  
  share(){
    this.service.updatedItems[0]=this.datas.value;
    this.service.updateData();
  }

}

