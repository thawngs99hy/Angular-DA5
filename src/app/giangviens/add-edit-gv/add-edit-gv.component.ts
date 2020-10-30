import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-gv',
  templateUrl: './add-edit-gv.component.html',
  styleUrls: ['./add-edit-gv.component.css']
})
export class AddEditGvComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() gv:any;
  maGv:string;
  tenGv:string;
  NgaySinh:string;
  GIOITINH:string;
  Tel:string;
  Email:string;
  ChucVu:string;
  QueQuan:string;
  Fax:string;
  Website:string;
  NoiLamViec:string;

  GiangVienList:any=[];

  ngOnInit(): void {
    // this.loadGiangVienList();
    // 
    this.maGv=this.gv.maGv;
    this.tenGv=this.gv.tenGv;
    this.ChucVu=this.gv.chucVu;
    this.Email=this.gv.email;
    this.Tel=this.gv.tel;
  }

  loadGiangVienList(){
    // 
    this.service.getAllGiangviens().subscribe((data:any)=>{
      this.GiangVienList=data;

      this.maGv=this.gv.maGv;
      this.tenGv=this.gv.tenGv;
      this.NgaySinh=this.gv.ngaysinh;
      this.GIOITINH=this.gv.gioitinh;
      this.Tel=this.gv.tel;
      this.Email=this.gv.email;
      this.ChucVu=this.gv.chucvu;
      this.QueQuan=this.gv.quequan;
      this.Fax=this.gv.fax;
      this.Website=this.gv.website;
      this.NoiLamViec=this.gv.noilamviec
    });
  }

  addGiangvien(){
      var val = {
        maBm:101,
        maGv:this.maGv,
                tenGv:this.tenGv,
                NgaySinh:this.NgaySinh,
                GIOITINH:this.GIOITINH,
                Tel:this.Tel,
                Email:this.Email,
                ChucVu:this.ChucVu,
                QueQuan:this.QueQuan,
                Fax:this.Fax,
                Website:this.Website,
                NoiLamViec:this.NoiLamViec,
                
              };
      this.service.addGiangvien(val).subscribe(res=>{
        alert("Thêm thành Công ^^!");
       
      });
    }

    updateGiangvien(){
      var val = {
        ...this.gv,
        maGv:this.maGv,
                tenGv:this.tenGv,
                NgaySinh:this.NgaySinh,
                GIOITINH:this.GIOITINH,
                Tel:this.Tel,
                Email:this.Email,
                ChucVu:this.ChucVu,
                QueQuan:this.QueQuan,
                Fax:this.Fax,
                Website:this.Website,
                NoiLamViec:this.NoiLamViec
              };
              
      this.service.updateGiangvien(val).subscribe(res=>{
        
        alert("Sửa thành Công ^^!");
      });
    }
}
