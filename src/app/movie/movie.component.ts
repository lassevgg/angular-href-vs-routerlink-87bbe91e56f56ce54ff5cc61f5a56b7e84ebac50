import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';
import { APIService } from 'src/app/Services/api.service';

export type EditorType = 'info' | 'get' | 'post' | 'update' | 'delete' | 'operationSuccess' | 'operationFailed' | 'elevatedUserMessage';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  editor: EditorType = 'info';

  title: string = "Movie";

  elevatedUserRequired: boolean;

  movieList: Movie[] = [];
  postSuccess: boolean = undefined
  putSuccess: boolean = undefined
  deleteSuccess: boolean = undefined

  constructor(private ApiService:APIService) { }

  ngOnInit(): void {
    this.elevatedUserRequired = true;
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

  updateMovieList():void{
    this.ApiService.getMovieList().subscribe( (result) => {
      this.movieList = result
    });
  }

  getMovieListOut():Movie[]{    
    return this.movieList;
  }

  onSubmitPost(data){
    var movie: Movie = new Movie;

    movie.id = data.ID;
    movie.title = data.Title
    movie.genreId = data.GenreID
    movie.director = data.Director
    movie.description = data.Description
    movie.durationMin = data.DurationMin

    console.log(movie);

    this.ApiService.postMovie(movie).subscribe( (result) => {
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
    var movie: Movie = new Movie;

    movie.id = data.ID;
    movie.title = data.Title
    movie.genreId = data.GenreID
    movie.director = data.Director
    movie.description = data.Description
    movie.durationMin = data.DurationMin

    console.log(movie);

    this.ApiService.putMovie(movie).subscribe( (result) => {
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
