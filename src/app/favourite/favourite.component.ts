import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../albums/album';
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favourites: Album[] = [];

  constructor(private favouriteService: FavouriteService,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.favourites = this.favouriteService.getFavourites();
  }

  removefav(album : Album) {
    this.favouriteService.removefav(album)
    this.toastrService.error("Favorilerden kaldırıldı: " + album.title);

    



  }


}
