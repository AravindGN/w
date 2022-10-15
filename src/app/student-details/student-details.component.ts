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
  total:any;


  ngOnInit(): void {
    
    this.service.totalpages().subscribe(store => { this.total=store.totalPages;console.log(this.total)});
    this.service.totalpages().subscribe(page => { this.items=page.listProducts;console.log(this.total)});
  }

  search(keyword:any){
    console.log(keyword.target.value);   
    if(keyword.target.value===""){
      this.service.totalpages().subscribe(page => { this.items=page.listProducts;});
    }else{
      this.service.search(keyword.target.value).subscribe(items=>{this.items =items;});
    }
  }

  update(id: number) {
    this.service.updateId = id;
    
  }
  delete(id: number) {
    this.service.deleteData(id);
    window.alert("Student Details Deleted Successfully");
    this.service.totalpages().subscribe(page => { this.items=page.listProducts;});
  }

  
  first(){
    this.service.pageNo =0;
    this.service.totalpages().subscribe(page => { this.items=page.listProducts;});
    
  }

  last(){
    this.service.totalpages().subscribe(store => { this.total=store.totalPages;});
    this.service.pageNo=this.total-1;
    this.service.totalpages().subscribe(page => { this.items=page.listProducts;});
    
  }
  next(){
    this.service.totalpages().subscribe(store => { this.total=store.totalPages;});
    if(this.service.pageNo <this.total-1){
      this.service.pageNo =this.service.pageNo +1;}
      this.service.totalpages().subscribe(page => { this.items=page.listProducts;});
  }
  previous(){
    if(this.service.pageNo>=0){
    this.service.pageNo =this.service.pageNo -1;}
    this.service.totalpages().subscribe(page => { this.items=page.listProducts;});
  }

 
}
