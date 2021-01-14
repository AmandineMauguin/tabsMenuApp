import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GalleryService } from "../services/gallery.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private galleryService: GalleryService
  ) {}

  galleryIndex = 0;
  //On récupère toutes nos données selon l'index.
  galleryDetails = this.galleryService.data[this.galleryIndex];

  // ------------------- ESSAI FAVORIS AVEC BOOLEAN ET SERVICE ---
  pushFavorites() {
    let params = { id: this.galleryIndex };
    this.activatedRoute.params.subscribe((params) => {
      this.galleryService.changeBoolean(params);
    });
  }

  getData() {
    this.activatedRoute.params.subscribe((params) => {
      this.galleryIndex = this.galleryService.data.findIndex(
        (item) => item.id == params.id
      );
      this.galleryDetails = this.galleryService.data[this.galleryIndex];
    });
  }
  ngOnInit() {
    this.getData();
  }
}
