import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/Models/Genre';
import { APIService } from 'src/app/Services/api.service';

export type EditorType = 'info' | 'get' | 'post' | 'update' | 'delete' | 'operationSuccess' | 'operationFailed';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  editor: EditorType = 'info';

  title: string = "Genre";

  genreList: Genre[] = [];
  postSuccess: boolean = undefined
  putSuccess: boolean = undefined
  deleteSuccess: boolean = undefined

  constructor(private ApiService:APIService) { }

  ngOnInit(): void {
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

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  updateGenreList():void{
    this.ApiService.getGenreList().subscribe(
      dataFromAPI => {this.genreList = dataFromAPI}
  );
}

  getGenreListOut():Genre[]{    
    return this.genreList;
  }

  onSubmitPost(data){
    var genre: Genre = new Genre;

    genre.id = data.ID;
    genre.type = data.Type;

    console.log(genre);

    this.ApiService.postGenre(genre).subscribe( (result) => {
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
    var genre: Genre = new Genre;

    genre.id = data.ID;
    genre.type = data.NewType;

    console.log(genre);

    this.ApiService.putGenre(genre).subscribe( (result) => {
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

  onSubmitDelete(data){
    var genre: Genre = new Genre;

    genre.id = data.ID;

    console.log(genre);

    this.ApiService.deleteGenre(genre).subscribe( (result) => {
      this.deleteSuccess = result
      console.log(this.deleteSuccess)
      if (this.deleteSuccess) {
        this.toggleEditor('operationSuccess');
      }
      else{
        this.toggleEditor('operationFailed');
      }   
    });
  }
}
