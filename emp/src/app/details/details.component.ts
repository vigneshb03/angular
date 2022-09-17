
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MainService } from '../service/main.service';
import { Details } from './details.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  formvalue !:FormGroup;

  DetailsObj :Details=new Details();
  Datas!:any;
  constructor(private formBuilder:FormBuilder,private main:MainService) { }

  ngOnInit(): void {
    this.formvalue=this.formBuilder.group({
      name:[''],
      email:[''],
      phno:[''],
      sal:['']

    })
    this.getEmpDetails();

  }

  postEmpDetails()
  {

    this.DetailsObj.name=this.formvalue.value.name;
    this.DetailsObj.email=this.formvalue.value.email;
    this.DetailsObj.phno=this.formvalue.value.phno;
    this.DetailsObj.sal=this.formvalue.value.sal;

    this.main.postEmp(this.DetailsObj)
    .subscribe(res=>{
      console.log(res);
      alert("Added Successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getEmpDetails();
    },
    err=>{
      alert("Something Wrong")
    })


  }

  getEmpDetails()
  {
    this.main.getEmp()
    .subscribe(res=>{
      this.Datas=res;
    })
  }

  deleteEmpDetails(row:any)
  {
      this.main.deleteEmp(row.id)
       .subscribe(res=>{
        alert("Deleted Successfully")
      })
  }

  onEdit(row:any)
  {
    this.formvalue.controls['name'].setValue(row.name);
    this.formvalue.controls['email'].setValue(row.email);
    this.formvalue.controls['phno'].setValue(row.phno);
    this.formvalue.controls['sal'].setValue(row.sal);


  }
  updateEmpDetails()
  {
    this.DetailsObj.name=this.formvalue.value.name;
    this.DetailsObj.email=this.formvalue.value.email;
    this.DetailsObj.phno=this.formvalue.value.phno;
    this.DetailsObj.sal=this.formvalue.value.sal;

    this.main.putEmp(this.DetailsObj.id,this.DetailsObj)
    .subscribe(res=>{
      alert("Updated Succeddfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getEmpDetails();


    })
  }


}
