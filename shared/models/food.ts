export class Foods
{
    id!:number;
    price!:number;
    name!:string;
    favourite:boolean=true;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];

}