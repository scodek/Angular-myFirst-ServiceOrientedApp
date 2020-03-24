import { Component, OnInit } from '@angular/core';
import { FakerService } from '../shared_services/faker.service';

@Component({
    selector:'comment-list',
    templateUrl: './comment-list.component.html',
    styles : [`
        .comment-list{display:flex;margin-bottom:5px;font-family: "Times New Roman", Times, serif;}
        .comment-section{margin-left:10px;padding-left:5px;background-color:#99ccff;width:100%}
        .comment-section p{font-size:15px;font-weight: bold;color:#003311}
        .comment{border:2px solid white;background-color:#e67300;height:60%;border-radius:5px;margin-bottom:15px}
        `]
})
export class CommentListComponent implements OnInit{
 constructor(private fakerService:FakerService){}
 profileArr : any ;
 
 //console.log(fakerService.getName());

 ngOnInit(){
    this.profileArr = this.fakerService.getPersonDetail()
 }
  
}