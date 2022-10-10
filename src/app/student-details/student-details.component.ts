import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private service: StudentService, private route: ActivatedRoute) { }
  items: any = [];
  datas: any = [];
  page: any = [];
  currentPage:any=1;

  ngOnInit(): void {
    
    this.service.page().subscribe(items => { this.items = items; })

    this.service.page().subscribe(page => { this.page = page;console.log(this.page); })
  }

  update(id: number) {
    this.service.updateId = id;
  }
  delete(id: number) {
    this.service.deleteData(id);
    window.alert("Student Details Deleted Successfully");
    this.service.page().subscribe(page => { this.page = page; })
  }

  // click(value: any){
  //   this.service.pageSize=value;
  //   this.service.page().subscribe(items => { this.items = items; } )

  // }
  newpage(value: any) {
    if(value===this.currentPage)
    return;
    this.currentPage=value;
    this.service.pageNo = value;
    this.service.page().subscribe(items => { this.items = items; })
  }

}
