import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-cv',
  templateUrl: './add-edit-cv.component.html',
  styleUrls: ['./add-edit-cv.component.css']
})
export class AddEditCvComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cv:any;
  maCv:string;
  tenCv:string;

  ngOnInit(): void {
    this.maCv=this.cv.maCv;
    this.tenCv=this.cv.tenCv;
  }

  addChucvu(){
      var val = {maCv:this.maCv,
                tenCv:this.tenCv};
      this.service.addChucvu(val).subscribe(res=>{
        alert("Thêm thành Công ^^!");
       
      });
    }

    updateChucvu(){
      var val = {maCv:this.maCv,
                tenCv:this.tenCv};
      this.service.updateChucvu(val).subscribe(res=>{
        alert("Sửa thành Công ^^!");
      });
    }
}
