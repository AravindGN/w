import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  items: any = [];
  updatedItems: any = [];
  fetchItem: any = [];
  updateId: any;
  pageNo: any = 0;


  url = "http://localhost:8080/netphenix/students";
  url2 = "http://localhost:8080/netphenix/page";
  url3 = "http://localhost:8080/netphenix/students/name";
  

  public studentDatas(): Observable<any> {
    return this.http.get<any>(this.url).pipe(tap(data => console.log("All:" + JSON.stringify(data))));
  }
 
  public totalpages(): Observable<any> {
    return this.http.get<any>(this.url2 + "/" + this.pageNo).pipe(tap(data => console.log("All:" + JSON.stringify(data))));
  }

  public singleData(): Observable<any> {
    return this.http.get<any>(this.url + "/" + this.updateId).pipe(tap(
      (data) => {
        console.log(JSON.stringify(data));
        return data;
      },
      (error) => {
        console.log(error);
      }));
  }

 public search(keyword: any): Observable<any> {
    const params = new HttpParams().set("keyword", keyword);
    return this.http.get<any>(this.url3, { params }).pipe(tap(
      (data) => {
        console.log(JSON.stringify(data));
        return data;
      },
      (error) => {
        console.log(error);
      }));
  }

 public postData() {
    this.http.post(this.url, this.items[0]).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.studentDatas();
  }

 public deleteData(delNum: any) {
    const params = new HttpParams().set("id", delNum);
    this.http.delete(this.url, { params }).subscribe(
      (Response) => { console.log(Response) },
      (error) => { console.log(error); }
    );
  }

public  updateData() {
    const params = new HttpParams().set("id", this.updateId);
    this.http.put(this.url, this.updatedItems[0], { params }).subscribe(
      (Response) => { console.log(Response) },
      (error) => { console.log(error); }
    );
  }

}
