import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  items:any=[];
  updatedItems:any=[];
  fetchItem:any=[];
  updateId:any;
  pageNo:any=1;
  
  url="http://localhost:8080/netphenix/students";
  url2="http://localhost:8080/netphenix/paging";


  studentDatas():Observable<any>{
    return this.http.get<any>(this.url).pipe(tap(data=>console.log("All:"+JSON.stringify(data))));
  }

  page():Observable<any>{
   return  this.http.get<any>(this.url2+"/"+this.pageNo).pipe(tap(data=>console.log("All:"+JSON.stringify(data))));
  }
  // totalpage():Observable<any>{
  //   const params = new HttpParams().set("totalPages",1);
  //   return this.http.get<any>(this.url2,{params})
  // }

  singleData():Observable<any>{
    const params = new HttpParams().set("id",this.updateId);
    return this.http.get<any>(this.url+"/"+this.updateId).pipe(tap(
       (data) => {
         console.log(JSON.stringify(data));
         return data;
       },
       (error) => {
         console.log(error);
       })); 
   }
 
   postData(){
     this.http.post(this.url, this.items[0]).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     )
      this.studentDatas();
   }
 
   deleteData(delNum:any) {
     const params = new HttpParams().set("id",delNum);
     this.http.delete(this.url, { params }).subscribe(
       (Response) => { console.log(Response) },
       (error) => { console.log(error); }
     );
   }
 
   updateData(){
     const params = new HttpParams().set("id",this.updateId);
     this.http.put(this.url, this.updatedItems[0], { params }).subscribe(
       (Response) => { console.log(Response) },
       (error) => { console.log(error); }
     );
   }

}
