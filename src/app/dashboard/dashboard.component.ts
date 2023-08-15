import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public name:string = ''
  public file:string = ''
  pass: string = ''
  user:string = ''
  mapped:any = {}
  ngOnInit(): void {
    console.log("ObjectData---->",Object)
   const obj : any = {
      "apple":[],
      "mango":[2],
      "lemon":["1","2"]
    }
     this.mapped = Object.keys(obj).map(key=>({type:key,value:obj[key]}))
     this.mapped.forEach((element:   { value: any; }) => {
        element.value
        console.log('element.value',element.value);
     });
     this.mapped.forEach((data: { value: any; })=> {
      if(data.value != ""){
        this.mapped.splice(data)
        console.log('removing empty data------->',this.mapped);
      }
     }
      )
  }

  wholeTable : any = []
  readFileLength(){
    if(this.name.length>0 && this.file.length>0){
      console.log("name",this.name,"/n","file",this.file)
      alert("success")
    }
    else{
      alert("elese")
      this.wholeTable.push(this.name,this.file)
    }
  }
  fileChangee(event : any){
    this.file= event
    console.log("event ",this.file  )

  }
  // ++++List 1++++++
  monthllyInvestment : any;
  rangeChange(event:any){
      console.log('event-->',event);
  }








}
