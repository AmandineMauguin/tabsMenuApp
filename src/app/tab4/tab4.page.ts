import { Component, OnInit } from "@angular/core";
import { GalleryService } from "../services/gallery.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  constructor(
    private galleryService: GalleryService,
    private activatedRoute: ActivatedRoute,
  ) {}

  galleryList = [];


  // ionViewWillEnter(){
  //   this.galleryList = this.galleryService.data;
  // }

  ngOnInit() {
    this.galleryList = this.galleryService.data;
  }
}
