import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44341/api";
// readonly PhotoUrl="https://localhost:44341/Photos";

  constructor(private http:HttpClient) { }
  //lay api du lieu bo phan
  getCvList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/chucvus');
  }

  //api bo phan them suwa xoa...
  addChucvu(val:any){
    return this.http.post(this.APIUrl+'/chucvus',val)
  }

  updateChucvu(val:any){
    return this.http.put(this.APIUrl+'/chucvus/'+val.maCv,val)
  }

  deleteChucvu(val:any){
    return this.http.delete(this.APIUrl+'/chucvus/'+val)
  }

  getAllChucvus():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/chucvus/GetChucvu')
  }

  //giangvien
  getGvList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/giangviens');
  }

  //api bo phan them suwa xoa...
  addGiangvien(val:any){
    return this.http.post(this.APIUrl+'/giangviens',val)
  }

  updateGiangvien(val:any){
    debugger
    return this.http.put(this.APIUrl+'/giangviens/'+val.maGv,val)
  }

  deleteGiangvien(val:any){
    return this.http.delete(this.APIUrl+'/giangviens/'+val)
  }

  getAllGiangviens():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/giangviens/GetGiangvien')
  }

  


}
