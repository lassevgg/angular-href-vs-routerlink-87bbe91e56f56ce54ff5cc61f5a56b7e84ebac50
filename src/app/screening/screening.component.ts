import { Component, OnInit } from '@angular/core';
import { Screening } from 'src/app/Models/Screening';
import { APIService } from 'src/app/Services/api.service';

export type EditorType = 'info' | 'get' | 'post' | 'update' | 'delete' | 'operationSuccess' | 'operationFailed' | 'elevatedUserMessage';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit {

  editor: EditorType = 'info';

  title: string = "Screening";

  elevatedUserRequired: boolean;

  screeningList: Screening[] = [];
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

  updateScreeningList():void{
    this.ApiService.getScreeningList().subscribe( (result) => {
      this.screeningList = result
      console.log(this.screeningList)
    });
  }

  getMovieListOut():Screening[]{    
    return this.screeningList;
  }

  onSubmitPost(data){
    var screening: Screening = new Screening;

    screening.id = data.ID;
    screening.movieId = data.MovieID;
    screening.auditoriumId = data.AuditoriumID;
    screening.screeningStart = data.ScreeningStart;

    console.log(screening);

    this.ApiService.postScreening(screening).subscribe( (result) => {
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
    var screening: Screening = new Screening;

    screening.id = data.ID;
    screening.movieId = data.MovieID;
    screening.auditoriumId = data.AuditoriumID;
    screening.screeningStart = data.ScreeningStart;

    console.log(screening);

    this.ApiService.putScreening(screening).subscribe( (result) => {
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
