import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-gv',
  templateUrl: './show-gv.component.html',
  styleUrls: ['./show-gv.component.css']
})
export class ShowGvComponent implements OnInit {

  constructor(private service:SharedService) { }

  GiangVienList:any=[];
//html
  ModalTitle:string;
  ActivateAddEditGvComp:boolean=false;
  gv:any;

  

//loc
  maGvFilter:string="";
  tenGvFilter:string="";
  GiangVienListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshGvList();
  }

  addClick(){
    this.gv={
      maGv:0,
      tenGv:"",
      chucVu:"",
      email:"",
      tel:""
    }
    this.ModalTitle="Thêm Giảng viên";
    this.ActivateAddEditGvComp=true;
  }

  editClick(item){
    this.gv=item;
    
    this.ModalTitle="Chỉnh sửa giảng viên";
    this.ActivateAddEditGvComp=true;
  }

  deleteClick(item){
    if(confirm('Bạn có chắc muốn xóa.?')){
      this.service.deleteGiangvien(item.maGv).subscribe(data=>{
        alert('Xóa thành công.!');
        this.refreshGvList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditGvComp=false;
    this.refreshGvList();
  }

  refreshGvList(){
    this.service.getGvList().subscribe(data=>{
      this.GiangVienList=data;
      // this.GiangVienListWithoutFilter=data;
      console.log(data);
    });
  }
  
  //ham du lieu va gan vao ds bo phan
  FilterFn(){
    var maGvFilter = this.maGvFilter;
    var tenGvFilter = this.tenGvFilter;
    
this.GiangVienList=this.GiangVienList.filter(function (el){
      return maGvFilter?el.maGv===parseInt(maGvFilter)
      &&
      el.tenGv.toString().toLowerCase().includes(
        tenGvFilter.toString().trim().toLowerCase()
      ):el.tenGv.toString().trim().toLowerCase().includes(
        tenGvFilter.toString().trim().toLowerCase()
      )
    });
    if(!maGvFilter && !tenGvFilter){
      this.refreshGvList()
    }
  }
}
