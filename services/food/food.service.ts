import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods {
    return this.getAll().find(food =>food.id==id)!;

  }

  getAllFoodByTag(tag:string):Foods[] {

    return tag== "All" ?
    this.getAll():this.getAll().filter(food =>food.tags?.includes(tag));

  }

  getAllTag():Tag[]{

    return [

      {name:'All',count:8},
      {name:'FastFood',count:3},
      {name:'Pizza',count:1},
      {name:'Lunch',count:2},
      {name:'Hamburger',count:1},
      {name:'Fries',count:1},
      {name:'Soup',count:1},
      {name:'Breakfast',count:3}

    ];
  }

  getAll():Foods[] {
    return[
      {
        id:1,
        name:'Hamburger',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'assets/food-1.jpg',
        tags:['FastFood','Hamburger']
      },

      {
        id:2,
        name:'Pizza',
        cookTime:'15-25',
        price:20,
        favourite:true,
        origins:['France'],
        star:5,
        imageUrl:'assets/food-2.jpg',
        tags:['FastFood','Pizza',]
      },

      {
        id:3,
        name:'Fries',
        cookTime:'10',
        price:10,
        favourite:false,
        origins:['Germany'],
        star:4.5,
        imageUrl:'assets/food-3.jpg',
        tags:['FastFood','Fries','Breakfast']
      },

      {
        id:4,
        name:'Meatballs',
        cookTime:'10-20',
        price:25,
        favourite:false,
        origins:['Indian'],
        star:4.5,
        imageUrl:'assets/food-4.jpg',
        tags:['Meatballs','Snack']
      },

      {
        id:5,
        name:'Soup',
        cookTime:'10-20',
        price:10,
        favourite:true,
        origins:['italy'],
        star:5,
        imageUrl:'assets/food-5.jpg',
        tags:['Soup','Breakfast']
      },

      {
        id:6,
        name:'Idli',
        cookTime:'10-20',
        price:10,
        favourite:true,
        origins:['italy'],
        star:4.5,
        imageUrl:'assets/food-6.jpg',
        tags:['Idli','Lunch']
      },

      {
        id:7,
        name:'Pratha',
        cookTime:'10-20',
        price:10,
        favourite:true,
        origins:['Indian'],
        star:4.5,
        imageUrl:'assets/food-7.jpg',
        tags:['Pratha','Breakfast']
      },

      {
        id:8,
        name:'Chole-Bhature',
        cookTime:'10-20',
        price:30,
        favourite:true,
        origins:['Indian'],
        star:4.5,
        imageUrl:'assets/food-8.jpg',
        tags:['Lunch','Lunch']
      }

      
    ];
  }
}
