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

  galleryIndex =0;
  //On récupère toutes nos données selon l'index.
  galleryDetails= this.galleryService.data[this.galleryIndex];

  getData(){
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params);
      // console.log(params.id);
      this.galleryIndex = this.galleryService.data.findIndex(item => item.id == params.id);
      //console.log(this.galleryIndex);
      //retourne l'objet récupéré par l'id :
      this.galleryDetails = this.galleryService.data[this.galleryIndex];
      // console.log(this.galleryService.data[this.galleryIndex]);
    });
  }
  getFavoris(){

  }

  ngOnInit() {
    this.getData();
  }
}
