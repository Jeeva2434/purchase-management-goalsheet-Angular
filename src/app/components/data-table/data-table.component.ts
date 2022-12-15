import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataTableService } from 'src/app/service/data-table.service';
import{purchasedata} from './data.model'; 

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  formValue!:FormGroup
  purchaseModelObj:purchasedata = new purchasedata
  alldata!:any

  constructor(private formBuilder:FormBuilder,private api:DataTableService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:['',Validators.required],
      age:['',Validators.required],
      colour:['',Validators.required],
      // city:['',Validators.required],
    })
    this.getData()
  }
  add(){
    let add = document.getElementById('actionAdd')
    add!.style.display = 'block'

    let update = document.getElementById('actionUpdate')
    update!.style.display = 'none'

  }
  edit(data:any){
    let add = document.getElementById('actionAdd')
    add!.style.display = 'none'

    let update = document.getElementById('actionUpdate')
    update!.style.display = 'block'

    this.purchaseModelObj._id  = data._id

    this.formValue.controls['name'].setValue(data.name)
    this.formValue.controls['age'].setValue(data.age)
    this.formValue.controls['colour'].setValue(data.colour)
    // this.formValue.controls['city'].setValue(data.city)
  }

update(){
  this.purchaseModelObj.name=this.formValue.value.name
  this.purchaseModelObj.age=this.formValue.value.age
  this.purchaseModelObj.colour=this.formValue.value.colour
  // this.purchaseModelObj.city=this.formValue.value.city

  this.api.updateData(this.purchaseModelObj,this.purchaseModelObj._id).subscribe(res=>{
      this.formValue.reset()
      this.getData()
      // alert('record updated')
  },
  err=>{
    alert('something went wrong !!')
  })
}

  addData(){
    this.purchaseModelObj.name=this.formValue.value.name
    this.purchaseModelObj.age=parseInt(this.formValue.value.age)
    this.purchaseModelObj.colour=this.formValue.value.colour
    // this.purchaseModelObj.city=this.formValue.value.city

    this.api.postdata(this.purchaseModelObj).subscribe(res=>{
      console.log(res);
      this.formValue.reset();
      this.getData()
      // alert('record added successfully')
    },
    err=>{
      // alert('something went wrong!!');
    }
    )
  }

  getData(){
    this.api.getdata().subscribe(res=>{
      this.alldata = res;
    })
  }

  deleteData(data:any){
    this.api.deletedata(data._id).subscribe(res=>{
      // alert('record deleted successfully')
      this.getData()
    })
  }

}
