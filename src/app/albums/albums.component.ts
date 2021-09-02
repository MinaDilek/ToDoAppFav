import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlbumsService } from '../services/albums.service';
import { FavouriteService } from '../services/favourite.service';
import { Album } from './album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumsService, private favouriteService: FavouriteService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => this.albums = data)
  }

  addToFavourites(album: Album){
    if(this.favouriteService.addToFavourites(album)){
      this.toastrService.success("Favorilere Eklendi: " + album.title);
    }else{
      this.toastrService.error("Favorilerde mevcut: " + album.title);
    }
  }
}
