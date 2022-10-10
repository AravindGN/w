import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-details',
  templateUrl: './create-details.component.html',
  styleUrls: ['./create-details.component.css']
})
export class CreateDetailsComponent implements OnInit {

  constructor(private service: StudentService) { }
  datas: any;

  ngOnInit(): void {
    this.datas = new FormGroup({
      name: new FormControl(),
      number: new FormControl(),
      address: new FormControl(),
      course: new FormControl()
    })
  }

  share() {
    this.service.items[0] = this.datas.value;
    this.service.postData();
    window.alert('Student Details Added');
  }

}
