import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/Models/Genre';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  title: string = "Genre";

  genreList: Genre[] = [];

  constructor(private ApiService:APIService) { }

  ngOnInit(): void {
    this.ApiService.getGenreList().subscribe(
      dataFromAPI => {this.genreList = dataFromAPI}
    );
  }

  getGenreListOut():Genre[]{
    return this.genreList;
  }
}
