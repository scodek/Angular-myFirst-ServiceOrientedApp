import { Injectable} from '@angular/core';
import * as faker from 'faker';


@Injectable()
export class FakerService{
    randomName:string;
    randomImage:any;
    getPersonDetail(){

      let randomProfileArr = [];
      for(let i=0;i<=5;i++){
         randomProfileArr.push({
            'name' : faker.name.findName(),
            'image' : faker.image.avatar(),
            'comment' : faker.lorem.sentences()
         });
      }

      return randomProfileArr;
    }
 
    
}