import { Component, OnInit } from '@angular/core';
import { Auditorium } from 'src/app/Models/Auditorium';
import { APIService } from 'src/app/Services/api.service';

export type EditorType = 'info' | 'get' | 'post' | 'update' | 'delete' | 'operationSuccess' | 'operationFailed' | 'elevatedUserMessage';

@Component({
  selector: 'app-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.css']
})
export class AuditoriumComponent implements OnInit {

  editor: EditorType = 'info';

  title: string = "Auditorium";

  elevatedUserRequired: boolean;

  auditoriumList: Auditorium[] = [];
  postSuccess: boolean = undefined
  putSuccess: boolean = undefined
  deleteSuccess: boolean = undefined

  constructor(private ApiService:APIService) { }

  ngOnInit(): void {
    this.elevatedUserRequired = false;
  }

  get showInfoEditor() {
    return this.editor === 'info';
  }

  get showGetEditor() {
    
    return this.editor === 'get';
  }

  get showPostEditor() {
    return this.editor === 'post';
  }

  get showUpdateEditor() {
    return this.editor === 'update';
  }

  get showDeleteEditor() {
    return this.editor === 'delete';
  }

  get showOperationSuccessEditor() {
    return this.editor === 'operationSuccess';
  }

  get showOperationFailedEditor() {
    return this.editor === 'operationFailed';
  }

  get showElevatedUserMessageEditor() {
    return this.editor === 'elevatedUserMessage';
  }

  toggleEditor(type: EditorType) {
    if (this.elevatedUserRequired) {
      if(this.ApiService.adminUser == null){
        return this.editor = 'elevatedUserMessage'
      }
      else{
        return this.editor = type;
      }
    }
    else{
      return this.editor = type;
    }        
  }

  updateAuditoriumList():void{
    this.ApiService.getAuditoriumList().subscribe( (result) => {
      this.auditoriumList = result
      console.log(this.auditoriumList)
    });
  }

  getMovieListOut():Auditorium[]{    
    return this.auditoriumList;
  }

  onSubmitPost(data){
    var auditorium: Auditorium = new Auditorium;

    auditorium.id = data.ID;
    auditorium.name = data.Name;
    auditorium.seatsNumber = data.SeatsNumber;

    console.log(auditorium);

    this.ApiService.postAuditorium(auditorium).subscribe( (result) => {
      this.postSuccess = result
      console.log(this.postSuccess);
      if (this.postSuccess) {
        this.toggleEditor('operationSuccess');
      }
      else{
        this.toggleEditor('operationFailed');
      }      
   });     
  }

  onSubmitUpdate(data){
    var auditorium: Auditorium = new Auditorium;

    auditorium.id = data.ID;
    auditorium.name = data.Name;
    auditorium.seatsNumber = data.SeatsNumber;

    console.log(auditorium);

    this.ApiService.putAuditorium(auditorium).subscribe( (result) => {
      this.putSuccess = result
      console.log(this.putSuccess);
      if (this.putSuccess) {
        this.toggleEditor('operationSuccess');
      }
      else{
        this.toggleEditor('operationFailed');
      }   
   });  
  }
}