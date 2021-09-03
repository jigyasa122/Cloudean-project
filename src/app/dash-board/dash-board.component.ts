import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  userobj={
    fname:"",
    lname:"",
    Email:"",
    Course:"",
  };
  
  Courses:any=['Engineering','Medical','Agriculture','Pharmacy','Law'];
  data:any=[];
 // ischeck:boolean=false;
  isEdit:boolean=false;
  isselected:any;
  

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(frm:any)
  { 
    
    console.log(frm.value);
    this.data.push( frm.value);
    this.userobj={
      fname:"",
      lname:"",
      Email:"",
      Course:"",
    }; }
    editUser(frm:any,I:any){
     // this.ischeck=true;
      this.isEdit=true;
      this.isselected=I;
      
       console.log("edit");
       this.userobj=Object.assign({},frm);
       
      
    /*  this.data.forEach((value:any,index:any)=>{
        if(value==frm)
        {
          this.data.splice(index,1);
        }
  
      })*/
     
      
    }
  
    deleteUser(element:any){
      console.log("Delete");
      alert("Are you sure you want to delete this row")
  
      this.data.forEach((value:any,index:any) => {
        if(value == element)
        this.data.splice(index,1);
      });
      this.isEdit=false;
      this.isselected=null;
    
    }
    onUpdate(frm:any)
    {
      
    for( let i=0;i<this.data.length;i++)
    {
    if(i==this.isselected)
    {
      this.data[i]=frm.form.value;
    }
     }
     this.userobj={
      fname:"",
      lname:"",
      Email:"",
      Course:"",
    };
    this.isEdit=false;
    this.isselected=null;

}
logout()
{
 var con= confirm(" Are you Sure you want to logout");
 if(con==true)
 {
     this.router.navigate(['logout']);
 }

}
}
