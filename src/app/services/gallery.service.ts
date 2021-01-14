import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  public data = [
    {
      id:0,
      url:'../../assets/space1.jpg',
      title:'X',
      author:'Me',
      description:'It\'s an X.',
      favorite:false,
    },
    {
      id:1,
      url:'../../assets/space2.jpg',
      title:'Planets',
      author:'Me',
      description:'It has 3 planets on it. ',
      favorite:false,
    },
    {
      id:2,
      url:'../../assets/space3.jpg',
      title:'Mushroom',
      author:'My cat',
      description:'BOOM.',
      favorite:false,
    },
    {
      id:3,
      url:'../../assets/space4.jpg',
      title:'Pink&Blue',
      author:'Me',
      description:'Pick a boo.',
      favorite:false,
    },
    {
      id:4,
      url:'../../assets/space5.jpg',
      title:'Thor',
      author:'Me',
      description:'It\'s a  blacksmith you know.',
      favorite:false,
    },
    {
      id:5,
      url:'../../assets/space6.jpg',
      title:'Earth',
      author:'Me',
      description:'Or at least, it looks like it. ',
      favorite:false,
    },
  ]

  constructor() { }
  
 
  changeBoolean(params){
    this.data[params.id].favorite = !this.data[params.id].favorite;
    
  }
}
