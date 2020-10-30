import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cv',
  templateUrl: './show-cv.component.html',
  styleUrls: ['./show-cv.component.css']
})
export class ShowCvComponent implements OnInit {

  constructor(private service:SharedService) { }

  ChucVuList:any=[];
//html
  ModalTitle:string;
  ActivateAddEditCvComp:boolean=false;
  cv:any;

//loc
  maCvFilter:string="";
  tenCvFilter:string="";
  ChucVuListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCvList();
  }

  addClick(){
    this.cv={
      maCv:0,
      tenCv:""
    }
    this.ModalTitle="Thêm chức Vụ";
    this.ActivateAddEditCvComp=true;
  }

  editClick(item){
    this.cv=item;
    this.ModalTitle="Chỉnh sửa chức vụ";
    this.ActivateAddEditCvComp=true;
  }

  deleteClick(item){
    if(confirm('Bạn có chắc muốn xóa.?')){
      this.service.deleteChucvu(item.maCv).subscribe(data=>{
        alert('Xóa thành công.!');
        this.refreshCvList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCvComp=false;
    this.refreshCvList();
  }

  refreshCvList(){
    this.service.getCvList().subscribe(data=>{
      this.ChucVuList=data;
      // this.ChucVuListWithoutFilter=data;
      console.log(data);

    });
  }
//ham du lieu va gan vao ds bo phan
  FilterFn(){
    var maCvFilter = this.maCvFilter;
    var tenCvFilter = this.tenCvFilter;
    debugger
this.ChucVuList=this.ChucVuList.filter(function (el){
      return maCvFilter?el.maCv===parseInt(maCvFilter)
      &&
      el.tenCv.toString().toLowerCase().includes(
        tenCvFilter.toString().trim().toLowerCase()
      ):el.tenCv.toString().trim().toLowerCase().includes(
        tenCvFilter.toString().trim().toLowerCase()
      )
    });
    if(!maCvFilter && !tenCvFilter){
      this.refreshCvList()
    }
  }
}
