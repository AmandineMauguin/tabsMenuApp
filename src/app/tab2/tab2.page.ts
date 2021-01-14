import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../services/gallery.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private galleryService : GalleryService) {}

  galleryList = [];
  ngOnInit(){
    console.log(this.galleryService.data);
    this.galleryList = this.galleryService.data;
  }
}
