import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/fundamentos/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent implements OnInit{
  data : any[]= [];

  constructor(private dataService : DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.dataService.getPosts()
      .subscribe((posts : any['']) => {
        this.data = posts;

        this.data.forEach(post => {
          post.likeCounter = 0;
          post.dislikeCounter = 0;
        });
      })
  }

  onClickLike(postId : number): void {
    if(this.data) {
      const postSelected = this.data.find(post => post.id === postId)
      postSelected.likeCounter += 1;
    }
  }

  onClickDislike(postId : number): void {
    if(this.data) {
      const postSelected = this.data.find(post => post.id === postId)
      postSelected.dislikeCounter += 1;
    }
  }

}
