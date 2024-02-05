import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/fundamentos/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{

  constructor(private route : ActivatedRoute, private dataService : DataService) {}

  user? : any

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getUserById(id)
    .subscribe(userId => {
      this.user = userId
      console.log(this.user)
    })
  }
}
